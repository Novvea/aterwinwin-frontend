import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/provider/UserProvider";
import { i_loginCredentials } from '../../shared/interface/Interface'

export const LogInView = () => {
  const history = useHistory();
  const [authUserContext, setAuthUserContext] = useContext(UserContext);
  const [logInFormData, setLogInFormData] = useState<i_loginCredentials>({
    username: "",
    password: ""
  })

  const signIn = () => {
    setAuthUserContext(logInFormData)
    localStorage.setItem( /* användarnamnet sparas inne i webläsaren */
      "user",
      logInFormData.username
    );
    history.push(RoutingPath.homeView); /* vi flyttas tillbaka till home-view */
  };

  return (
    <div>
      <h1>Logga in här om du vill.</h1>
      <form>
        <input
          placeholder="username"
          onChange={(event) =>
            setLogInFormData({
              ...logInFormData,
              username: event.target.value
            })
          }
        />
        <br />
        <input
          placeholder="password"
          onChange={(event) =>
            setLogInFormData({
              ...logInFormData,
              password: event.target.value,
            })
          }
        />
        <button onClick={signIn}>Logga in</button>
      </form>
    </div >
  );
};

  //Gör egen funktion för att spara logincredentials istället för useState
/*   const formInput = { username: '', password: '' }
  const storeFormInputData = (typetype: string, input: string) => {
   return ({ ...formInput, [typetype]: input })
  } */