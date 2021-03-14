import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import RoutingPath from '../../routes/RoutingPath'

export const SignUpView = () => {
  const history = useHistory()

  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: ''
  })

  const verifyInput = () => {
    if (signUpFormData.password === signUpFormData.confirmPassword) {
      createNewUser({ email: signUpFormData.email, firstname: signUpFormData.firstname, lastname: signUpFormData.lastname, password: signUpFormData.password })
      console.log('signUpFormData : ', signUpFormData)
    } else {
      console.log('Create new user failed due to nonmatching passwords')
    }
  }

  const createNewUser = async ({ email, firstname, lastname, password }: { email: string, firstname: string, lastname: string, password: string }) => {
    try {
      await BackendAPIService.createUser({ email, firstname, lastname, password })
      console.log('User was created')
      history.push(RoutingPath.homeView)
    } catch (error) {
      console.log('errormessage: ', error)
    }
  }


  return (
    <div className="content">
      <h1>Skapa ditt konto här:</h1>
      <label>Fyll i din e-post:
        <input type="text" required onChange={(event) => setSignUpFormData({ ...signUpFormData, email: event.target.value })} />
      </label>
      <br />
      <label>Fyll i ditt förnamn:
        <input type="text" required onChange={(event) => setSignUpFormData({ ...signUpFormData, firstname: event.target.value })} />
      </label>
      <br />
      <label>Fyll i ditt efternamn:
        <input type="text" required onChange={(event) => setSignUpFormData({ ...signUpFormData, lastname: event.target.value })} />
      </label>
      <br />
      <label> Fyll i ditt lösenord:
        <input type='password' required onChange={(event) => setSignUpFormData({ ...signUpFormData, password: event.target.value })} />
      </label>
      <br />
      <label> Upprepa ditt lösenord:
        <input type='password' required onChange={(event) => setSignUpFormData({ ...signUpFormData, confirmPassword: event.target.value })} />
      </label>
      <br />
      <button onClick={() => verifyInput()}>Skapa konto</button> <br />
      {/*  <hr />
            <h1>Displaying all users: </h1>
       <ul>
        {allUsers.map((x: any) => <li>{x.username}</li>)}
      </ul> */}
    </div>
  );
};
