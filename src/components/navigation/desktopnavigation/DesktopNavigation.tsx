import "./DesktopNavigation.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";


export const DesktopNavigation = () => {

  const [authUserContext] = useContext(UserContext);

  const displayNavigationOrUsername = () => {
    return authUserContext ?
      <div className="profile" >
        <Profile />
      </div>
      :
      <div className="desktopNavigationTabWrapper">
        <Link to={RoutingPath.signUpView}>
          Gå med
      </Link>
        <span> eller </span>
        <Link to={RoutingPath.logInView}>
          logga in
      </Link>
        <span> eller </span>
        <Link to={RoutingPath.aboutView}>
          få veta hur det fungerar.
      </Link>
      </div>
      ;
  };

  return displayNavigationOrUsername()
};
