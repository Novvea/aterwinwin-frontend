import { useState } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'

export const SignUpView = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const verifyInput = () => {
    if (formData.password === formData.confirmPassword) {
      createNewUser({ username: formData.username, password: formData.password })
    } else {
      console.log('Create new user failed due to nonmatching passwords')
    }
  }

  const createNewUser = async ({ username, password }: { username: string, password: string }) => {
    try {
      await BackendAPIService.createUser({ username, password })
      console.log('User was created')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>Skapa ditt konto här:</h1>
      <label>Fyll i ditt användarnamn:
        <input type="text" required onChange={(event) => setFormData({ ...formData, username: event.target.value })} />
      </label>
      <br />
      <label> Fyll i ditt lösenord:
        <input type='password' required onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
      </label>
      <br />
      <label> Upprepa ditt lösenord:
        <input type='password' required onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })} />
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
