import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/provider/UserProvider";

export const LogInView = () => {
  const history = useHistory();
  const [authUserContext, setAuthUserContext] = useContext(UserContext);

  const signIn = () => {
    setAuthUserContext({ ...authUserContext, isAuthenticated: true })
    localStorage.setItem( /* användarnamnet sparas inne i webläsaren */
      "user",
      authUserContext.username
    );
    history.push(RoutingPath.homeView); /* vi flyttas tillbaka till home-view */
  };

  useEffect(() => {
    setAuthUserContext({
      username: "",
      password: "",
      isAuthenticated: false
    })
    localStorage.removeItem('user')
  }, [])

  return (
    <div>
      <h1>Logga in här om du vill.</h1>
      <form>
        <input
          placeholder="username"
          onChange={(event) =>
            setAuthUserContext({
              ...authUserContext,
              username: event.target.value,
            })
          }
        />{" "}
        <br />
        <input
          placeholder="password"
          onChange={(event) =>
            setAuthUserContext({
              ...authUserContext,
              password: event.target.value,
            })
          }
        />
        <button onClick={() => signIn()}>Logga in</button>
      </form>
    </div >
  );
};
