import { useState, useEffect } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'

export const SignUpView = () => {
  const [loading, setLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    username: 'anna_web',
    password: 'secret_web'
  })
  const [users, setUsers] = useState([])

  const create = async () => {
    try {
      setLoading(true)
      await BackendAPIService.createUser(newUser)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    const response = await BackendAPIService.getAllUsers()
    setUsers(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [loading])

  console.log('users:', users)

  return (
    <div>
      <h1>Mitt Backend API</h1>
      <h1>Fyll i följande fält:</h1>
      <input placeholder='användarnamn' onChange={(event) => setNewUser({ ...newUser, username: event.target.value })}></input>
      <br />
      <input placeholder='lösenord' type='password' onChange={(event) => setNewUser({ ...newUser, password: event.target.value })}></input>
      <br />
      {/*  
      <input placeholder='upprepa lösenord' type='password'></input> */}
      <button onClick={() => create()}>Skapa konto</button> <br />
      <hr />
      <h1>Displaying all users: </h1>
      <ul>
        {users.map((x: any) => <li>{x.username}</li>)}
      </ul>
    </div>
  );
};
