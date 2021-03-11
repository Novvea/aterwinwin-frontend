import { useState, useContext } from "react";
import { i_loginCredentials } from "../../shared/interface/Interface";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/provider/UserProvider";

export const LogInView = () => {
  const history = useHistory();
  const [loginCredentials, setLoginCredentials] = useState<i_loginCredentials>({
    username: "",
    password: "",
    isAuthenticated: false
  });
  const [authUserContext, setAuthUserContext] = useContext(UserContext);

  const signIn = () => {
    setLoginCredentials({ ...loginCredentials, isAuthenticated: true })
    if (loginCredentials.isAuthenticated = true) {
      localStorage.setItem(
        "user",
        loginCredentials.username
      ); /* användarnamnet sparas inne i webläsaren */
      setAuthUserContext(
        loginCredentials
      ); /* alla värden i logincredentials sparas i ett globalt värde */
      history.push(RoutingPath.homeView); /* vi flyttas tillbaka till home-view */
    } else {
      alert('Det har inte funkat i Loginview att sätta IsAuthenticated till true')
    }
  };
  console.log('loginview authUserContext: ', authUserContext)

  return (
    <div>
      {/* <h1>{loginCredentials.username}</h1> */}
      <h1>Logga in här om du vill.</h1>
      <form>
        <input
          placeholder="username"
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              username: event.target.value,
            })
          }
        />{" "}
        <br />
        <input
          placeholder="password"
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              password: event.target.value,
            })
          }
        />
        <button onClick={() => signIn()}>Logga in</button>
      </form>
    </div>
  );
};
