import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SetURLSearchParams } from "react-router-dom";
import { backend_url } from "../Utilities/global";
import { requestHandler2 } from "../HelperFunctions/requestHandler";

export type requestType = {
  isLoading: boolean;
  data: null | any;
  error: null | any;
};

type AuthUserContextValueType = {
  userLoginInfo: {
    email: string | null;
    password: string | null;
  };
  setUserLoginInfo: Dispatch<
    SetStateAction<{
      email: string | null;
      password: string | null;
    }>
  >;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  signInRequest: requestType;
  signIn: () => void;
  logout: () => void;
};

type AuthUserContextProviderTypes = {
  children: React.ReactNode;
};

export const AuthUserContext = createContext<AuthUserContextValueType>(
  {} as AuthUserContextValueType
);

const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderTypes) => {
  // States
  const [userLoginInfo, setUserLoginInfo] = useState<{
    email: string | null;
    password: string | null;
  }>({
    email: null,
    password: null,
  });

  // Query Params
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [signInRequest, setSignInRequest] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  //   Utils
  const redirectRoute = location.state || "/dashboard";
  const accessToken = localStorage.getItem("iseAdminAccessToken");

  const signIn = () => {
    setSignInRequest({ isLoading: true, data: null, error: null });
    if (userLoginInfo.email && userLoginInfo.password)
      axios
        .post(`${backend_url}/api/ise/v1/auth/login/admin`, {
          email: userLoginInfo.email,
          password: userLoginInfo.password,
        })
        .then((res) => {
          localStorage.setItem("iseAdminAccessToken", res.data?.accessToken);
          localStorage.setItem("iseAdminRefreshToken", res.data?.refreshToken);
          setSignInRequest({
            data: res.data,
            error: null,
            isLoading: false,
          });
          navigate(redirectRoute);
        })
        .catch((err) => {
          localStorage.setItem(
            "ise-admin-email",
            userLoginInfo.email as string
          );

          setSignInRequest({
            data: null,
            error: err.response?.data?.error
              ? err.response?.data?.error?.responseMessage
              : !err.response?.data?.error
              ? err.response?.data?.responseMessage.toString()
              : err.message,
            isLoading: false,
          });

          if (
            err?.response?.data?.responseMessage ===
            "Email Verification Required!"
          ) {
            navigate("/verify-email");
          }
        });
  };

  const logout = () => {
    localStorage.removeItem("iseAdminAccessToken");
    localStorage.removeItem("iseAdminRefreshToken");

    navigate("/sign-in", { state: location.pathname });
  };

  const getAccountDetails = () => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/my-profile`,
      method: "GET",
      setNotificationsFailure: true,
      state: signInRequest,
      setState: setSignInRequest,
      errorFunction() {
        logout();
      },
    });
  };

  // Effects
  useEffect(() => {
    if (accessToken) {
      getAccountDetails();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <AuthUserContext.Provider
      value={{
        userLoginInfo,
        setUserLoginInfo,
        searchParams,
        setSearchParams,
        signInRequest,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
