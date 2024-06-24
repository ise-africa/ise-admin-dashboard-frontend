import axios from "axios";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SetURLSearchParams } from "react-router-dom";
import { backend_url } from "../Utilities/global";

export type requestType = {
  isLoading: boolean;
  data: null | any[] | string;
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
  fetchCountries: () => void;
  countriesRequestObject: requestType;
  setCountriesRequestObject: Dispatch<SetStateAction<requestType>>;
  signInRequest: requestType;
  signIn: () => void;
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
  const [countriesRequestObject, setCountriesRequestObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
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

  // Requests
  const fetchCountries = () => {
    setCountriesRequestObject({
      isLoading: true,
      data: null,
      error: null,
    });
    axios
      .get(`https://restcountries.com/v3.1/all?fields=name`)
      .then((res) => {
        setCountriesRequestObject({
          isLoading: false,
          data: res.data,
          error: null,
        });
      })
      .catch((err) => {
        console.log(err);
        setCountriesRequestObject({
          isLoading: false,
          data: null,
          error: err?.response?.data?.message,
        });
      });
  };

  const signIn = () => {
    setSignInRequest({ isLoading: true, data: null, error: null });
    if (userLoginInfo.email && userLoginInfo.password)
      axios
        .post(`${backend_url}/api/ise/v1/auth/login/admin`, {
          email: userLoginInfo.email,
          password: userLoginInfo.password,
        })
        .then((res) => {
          setSignInRequest({
            data: res.data,
            error: null,
            isLoading: false,
          });
          navigate(redirectRoute);
          localStorage.setItem("iseAdminAccessToken", res.data?.accessToken);
          localStorage.setItem("iseAdminRefreshToken", res.data?.refreshToken);

          //   getUser();
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

  return (
    <AuthUserContext.Provider
      value={{
        userLoginInfo,
        setUserLoginInfo,
        searchParams,
        setSearchParams,
        fetchCountries,
        countriesRequestObject,
        setCountriesRequestObject,
        signInRequest,
        signIn,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
