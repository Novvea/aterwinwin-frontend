import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/provider/UserProvider";
import { i_loginCredentials } from '../../shared/interface/Interface'
import BackendAPIService from '../../shared/api/service/BackendAPIService'

export const LogInView = () => {
  const history = useHistory();
  const [authUserContext, setAuthUserContext] = useContext(UserContext);
  const [allUsersFromServer, setAllUsersFromServer] = useState([])
  const [logInFormData, setLogInFormData] = useState<i_loginCredentials>({
    email: "",
    password: ""
  })

  const fetchDataFromServer = async () => {
    const response = await BackendAPIService.getAllUsers()
    const emails = response.data.map((item: any) => item.email)
    console.log('emails', emails)
    setAllUsersFromServer(response.data)
  }

  useEffect(() => {
    fetchDataFromServer()
  }, [])


  const signIn = () => {
    const isUserVeryfied = allUsersFromServer.find((item: any) => {
      if (item.email === logInFormData.email && item.password === logInFormData.password) {
        setAuthUserContext({
          email: item.email,
          firstname: item.firstname,
          lastname: item.lastname,
          password: item.password
        })
        return true
      }
      return false
    })
    if (isUserVeryfied) {
      history.push(RoutingPath.homeView); /* vi flyttas tillbaka till home-view */
    } else {
      alert('Antingen är din epost eller ditt lösenord fel, testa igen!')
    }
  }

  console.log('authUserContext :', authUserContext)

  return (
    <div className="content">
      <h1>Logga in här om du vill.</h1>
      <form>
        <input
          placeholder="email"
          onChange={(event) =>
            setLogInFormData({
              ...logInFormData,
              email: event.target.value
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