import './MyProfileView.css'
import { useContext, useState, useEffect } from 'react'
import BackendAPIService from '../../../shared/api/service/BackendAPIService'
import { UserContext } from '../../../shared/provider/UserProvider'

export const MyProfileView = () => {

  const [myUploadedItems, setMyUploadedItems] = useState([])
  const [authUserContext, setAuthUserContext] = useContext(UserContext);

  const getMyItemsFromServerForDisplay = async (email: string) => {
    console.log('i send this to the server: ', email)
    try {
      const response = await BackendAPIService.getMyItemsFromServer(email)
      setMyUploadedItems(response.data)
      console.log('data just arriwwed from server', response.data)
    } catch (error) {
      console.log('i could not get the users items from the server')
    }
  }

  console.log('myUploadedItems: ', myUploadedItems)

  useEffect(() => {
    getMyItemsFromServerForDisplay(authUserContext.email)
  }, [])


  const displayUploadedItemsIfThereAreAny = () => {
    return myUploadedItems.length > 0
      ?
      <>
        <h2>Mina tillagda object:</h2>
        <ul className='likedPictures'>
          {myUploadedItems.map((pic: string) => <li><img key={pic} src={pic} alt='Product' /></li>)}
        </ul>
      </>
      :
      <h2>Du har ännu inte gillat några bilder</h2>
  }

  return (
    <div>
      <h1>Detta är min profilsida</h1>
      {displayUploadedItemsIfThereAreAny()}

      <ul>
        <li>Lägg till info om användaren</li>
        <li>Visa upplagda föremål</li>
        <li>Visa gillade och supergillade föremål</li>
        <li>Visa önskelistan</li>
      </ul>
    </div>
  )
}