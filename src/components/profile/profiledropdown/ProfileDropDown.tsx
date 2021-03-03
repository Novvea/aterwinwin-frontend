import "./ProfileDropDown.css";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
  const [authUserContext, setAuthUserContext] = useContext(UserContext);

  const logOut = () => {
    setAuthUserContext(false);
    localStorage.removeItem('user')
  }

  return (
    <div className="profileDropDown">
      <Link to={RoutingPath.myProfileView}>Min profil</Link>
      <button>Lägg upp vara</button>
      <button>Skapa önskelista</button>
      <Link to={RoutingPath.settingsView}>Inställningar</Link>
      <Link to={RoutingPath.homeView} onClick={() => logOut()}>Logga ut</Link>
    </div>
  );
};
