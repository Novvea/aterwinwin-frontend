import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/provider/UserProvider";
import { i_loginCredentials } from '../../shared/interface/Interface'

export const LogInView = () => {
  const history = useHistory();
  const [authUserContext, setAuthUserContext] = useContext(UserContext);
  const [logInFormState, setLogInFormState] = useState<i_loginCredentials>({
    username: "",
    password: ""
  })

  const signIn = () => {
    setAuthUserContext(logInFormState)
    localStorage.setItem( /* användarnamnet sparas inne i webläsaren */
      "user",
      logInFormState.username
    );
    history.push(RoutingPath.homeView); /* vi flyttas tillbaka till home-view */
  };

  /*   useEffect(() => {
      console.log('innana', authUserContext, 'b', localStorage)
  
      setAuthUserContext({
        username: "",
        password: "",
      })
      localStorage.removeItem('user')
      console.log('a', authUserContext, 'b', localStorage)
    }, []) */

  return (
    <div>
      <h1>Logga in här om du vill.</h1>
      <form>
        <input
          placeholder="username"
          onChange={(event) =>
            setLogInFormState({
              ...logInFormState,
              username: event.target.value
            })
          }
        />
        <br />
        <input
          placeholder="password"
          onChange={(event) =>
            setLogInFormState({
              ...logInFormState,
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