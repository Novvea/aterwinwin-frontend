import { useState, useEffect } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'

export const SignUpView = () => {
  /*   const [loading, setLoading] = useState(false) */
  /*   const [allUsers, setAllUsers] = useState([]) */
  const [newUser, setNewUser] = useState({
    username: '',
    password: ''
  })
  const [localUser, setLocalUser] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const verifyInput = () => {
    if (localUser.password === localUser.confirmPassword) {
      setNewUser({ ...newUser, username: localUser.username, password: localUser.password })
      createNewUser()
    } else {
      console.log('Create new user failed due to nonmatching passwords')
    }
  }

  const createNewUser = async () => {
    try {
      await BackendAPIService.createUser(newUser)
      console.log('User was created')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(newUser)

  return (
    <div>
      <h1>Skapa ditt konto här:</h1>
      <label>Fyll i ditt användarnamn:
        <input type="text" required onChange={(event) => setLocalUser({ ...localUser, username: event.target.value })} />
      </label>
      <br />
      <label> Fyll i ditt lösenord:
        <input type='password' required onChange={(event) => setLocalUser({ ...localUser, password: event.target.value })} />
      </label>
      <br />
      <label> Upprepa ditt lösenord:
        <input type='password' onChange={(event) => setLocalUser({ ...localUser, confirmPassword: event.target.value })} />
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
