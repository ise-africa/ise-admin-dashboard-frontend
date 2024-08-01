import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthUserContext";
import Loader from "../Loader/Loader";

const RequireAuth = () => {
  // COntext
  const { signInRequest } = useContext(AuthUserContext);

  // Storage
  const userToken = localStorage.getItem("iseAdminAccessToken");

  // Location
  const location = useLocation();

  return (
    <>
      {signInRequest.isLoading && userToken ? (
        <Loader />
      ) : signInRequest?.isLoading && !userToken ? (
        <Loader />
      ) : !signInRequest.isLoading && userToken && signInRequest?.data ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" replace={true} state={location.pathname} />
      )}
    </>
  );
};

export default RequireAuth;
