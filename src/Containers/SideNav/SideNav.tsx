import classes from "./SideNav.module.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { activeToggler } from "../../HelperFunctions/activeTogglers"

export const sideNavIconsHandler = (title: string) => {
  if (title === "Dashboard") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 19C36 28.3888 28.3888 36 19 36V38C29.4934 38 38 29.4934 38 19H36ZM19 36C9.61116 36 2 28.3888 2 19H0C0 29.4934 8.50659 38 19 38V36ZM2 19C2 9.61116 9.61116 2 19 2V0C8.50659 0 0 8.50659 0 19H2ZM19 2C28.3888 2 36 9.61116 36 19H38C38 8.50659 29.4934 0 19 0V2ZM26 19C26 22.866 22.866 26 19 26V28C23.9706 28 28 23.9706 28 19H26ZM19 26C15.134 26 12 22.866 12 19H10C10 23.9706 14.0294 28 19 28V26ZM12 19C12 15.134 15.134 12 19 12V10C14.0294 10 10 14.0294 10 19H12ZM19 12C22.866 12 26 15.134 26 19H28C28 14.0294 23.9706 10 19 10V12ZM31.0208 5.56497L23.9497 12.636L25.364 14.0503L32.435 6.97919L31.0208 5.56497ZM23.9497 25.364L31.0208 32.435L32.435 31.0208L25.364 23.9497L23.9497 25.364ZM14.0503 12.636L6.97919 5.56497L5.56497 6.97918L12.636 14.0503L14.0503 12.636ZM12.636 23.9497L5.56497 31.0208L6.97918 32.435L14.0503 25.364L12.636 23.9497Z" fill="#B9B9B9"/>
      </svg>
    );
  } else if (title === "Courses") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 9H9.02M9 1H19C20.0237 0.999971 21.0473 1.39049 21.8284 2.17157L35.8285 16.1716C37.3906 17.7337 37.3906 20.2663 35.8285 21.8284L21.8284 35.8284C20.2663 37.3905 17.7337 37.3905 16.1716 35.8284L2.17157 21.8284C1.39053 21.0474 1 20.0237 1 19V9C1 4.58172 4.58172 1 9 1Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  } else if (title === "Profile") {
    return (
      <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 9C23 13.4183 19.4183 17 15 17C10.5817 17 7 13.4183 7 9C7 4.58172 10.5817 1 15 1C19.4183 1 23 4.58172 23 9Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 23C7.26801 23 1 29.268 1 37H29C29 29.268 22.732 23 15 23Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  } else if (title === "Support") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4553 13C12.5536 10.6696 15.5169 9 19.0001 9C23.4184 9 27.0001 11.6863 27.0001 15C27.0001 17.7989 24.4449 20.1502 20.9885 20.8132C19.9038 21.0213 19.0001 21.8954 19.0001 23M19 29H19.02M37 19C37 28.9411 28.9411 37 19 37C9.05887 37 1 28.9411 1 19C1 9.05887 9.05887 1 19 1C28.9411 1 37 9.05887 37 19Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  } else if (title === "Student") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 9V1M27 9V1M9 17H29M5 37H33C35.2091 37 37 35.2091 37 33V9C37 6.79086 35.2091 5 33 5H5C2.79086 5 1 6.79086 1 9V33C1 35.2091 2.79086 37 5 37Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  } else if (title === "Schools") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 9V1M27 9V1M9 17H29M5 37H33C35.2091 37 37 35.2091 37 33V9C37 6.79086 35.2091 5 33 5H5C2.79086 5 1 6.79086 1 9V33C1 35.2091 2.79086 37 5 37Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  } else {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 9V1M27 9V1M9 17H29M5 37H33C35.2091 37 37 35.2091 37 33V9C37 6.79086 35.2091 5 33 5H5C2.79086 5 1 6.79086 1 9V33C1 35.2091 2.79086 37 5 37Z" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
};

const SideNav = () => {
  // Location
  const location = useLocation();

  // COntext
  const { navItmesState, setNavItemsState } = useContext(AppContext)

  // Utils

  return (
    <section className={classes.container}>
      <div className={classes.navSection}>
        {navItmesState.map((data, i) => {
          if (data.children) {
            return <div key={i}>
              <div key={i}
                className={
                  data.keywords?.includes(location.pathname.slice(1)) ||
                    data.route === location.pathname ||
                    data.route?.includes(location.pathname.split("/")[1])
                    ? classes.moreMenuContentActive
                    : classes.moreMenuContentInActive
                }>
                <Link to={data.route} className={classes.link}>
                  {sideNavIconsHandler(data.title)}</Link>

                <Link to={data.route} className={classes.link}>
                  <span>{data.title}</span></Link>

                <svg
                  onClick={() => {
                    activeToggler(i, navItmesState, setNavItemsState)
                  }}

                  style={data.isActive ? { transform: "rotate(-90deg)", transition: "all .3s ease-in-out" } : { transform: "rotate(0deg)", transition: "all .3s ease-in-out" }}
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9L12 16L5 9" stroke="#B9B9B9" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={classes.otherOptions} style={data.isActive ? { maxHeight: "1000px" } : { maxHeight: "0px" }}>
                {data.children.map((datum: any, j: number) => {
                  return <Link to={datum.route} key={j}>{datum.title}</Link>
                })}
              </div>
            </div>
          }
          return (
            <Link
              to={data.route as string}
              key={i}
              className={
                data.keywords?.includes(location.pathname.slice(1)) ||
                  data.route === location.pathname ||
                  data.route?.includes(location.pathname.split("/")[1])
                  ? classes.active
                  : classes.inActive
              }
            >
              {sideNavIconsHandler(data.title)}
              <span>{data.title}</span>
            </Link>
          );
        })}
        <div className={classes.logout}>
          <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 25L37 17M37 17L29 9M37 17L9 17M21 25V27C21 30.3137 18.3137 33 15 33H7C3.68629 33 1 30.3137 1 27V7C1 3.68629 3.68629 1 7 1H15C18.3137 1 21 3.68629 21 7V9" stroke="#B9B9B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Logout</span>
        </div>
      </div>
    </section>
  );
};

export default SideNav;
