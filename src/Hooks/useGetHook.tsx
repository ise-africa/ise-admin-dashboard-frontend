import { useContext } from "react";
import useSWR, { SWRConfiguration } from "swr";
import { AppContext } from "../Context/AppContext";
import { AuthUserContext } from "../Context/AuthUserContext";
// import { setNotiticationFunction } from "../Utilities/setNotificationsFunction";

const useGetHook = (url: string | null, props?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating } = useSWR(url, { ...props });

  // Context
  const { setNotifications } = useContext(AppContext);
  const { logout } = useContext(AuthUserContext);

  const errorMessage = error?.response?.data?.error
    ? error?.response?.data?.error?.responseMessage
    : !error?.response?.data?.error
    ? error?.response?.data?.responseMessage.toString()
    : error?.request
    ? "There was an issue making this request"
    : error?.message;

  if (errorMessage) {
    // setNotiticationFunction(setNotifications, errorMessage);
  }

  if (errorMessage === "Expired Token" || errorMessage === "Unauthorized") {
    logout();
  }

  return { data, error, isLoading, isValidating };
};

export default useGetHook;
