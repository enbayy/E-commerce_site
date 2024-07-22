import { useEffect, useState } from "react";
import { currentSession } from "../utils/CurrentSession";
import { Navigate } from "react-router-dom";
import { getRoutePath } from "./routes";
import { ROUTES_ID } from "./routes_id";

/* eslint-disable react/prop-types */
const RouteWithRedirections = (props) => {
  // const [isAuthenticated,setIsAuthenticated] = useState();

  // console.log('props',props)

  // useEffect(() => {
  //   const checkAuth = async () => {
  //    await currentSession().then((res) => {
  //       setIsAuthenticated(res.toString());
  //     });

  //   };
  //   checkAuth()
  // }, []);
  console.log("props", props);
  const isAuthenticated = true;

  const isLoginSidePage = (path) => {
    const loginsidePages = [
      ROUTES_ID.login,
      ROUTES_ID.register,
      ROUTES_ID.forgotpassword,
    ];
    console.log(path);
    const loginsidePaths = loginsidePages.map((id) => getRoutePath(id));

    return loginsidePaths.some((route) => route === path);
  };

  if (isAuthenticated) {
    if (isLoginSidePage(props.path)) {
      return (
        <>
          <Navigate to={getRoutePath(ROUTES_ID.profile)} />
        </>
      );
    } else {
      return <>{props.children}</>;
    }
  } else {
    if (isLoginSidePage(props.path)) {
      return <>{props.children}</>;
    } else {
      return (
        <>
          <Navigate to={getRoutePath(ROUTES_ID.login)} />
        </>
      );
    }
  }
};

export default RouteWithRedirections;
