import styles from './AddItemView.module.css'
import { useState, useContext } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import CloudinaryAPIService from '../../shared/api/service/CloudinaryAPIService'
import { UserContext } from '../../shared/provider/UserProvider'


export const AddItemView = () => {
  const [authUserContext, setAuthUserContext] = useContext(UserContext);
  const [addItemFormData, setAddItemFormData] = useState({
    name: '',
    category: '',
    url: '',
    owner: '',
    interestedUsers: [],
    uninterestedUsers: []
  })

  console.log('authUserContext: ', authUserContext)


  const handleChangeImageFile = async (event: any) => {
    if (event.target.files) {
      try {
        const response = await CloudinaryAPIService.uploadOrUpdateImage(event.target.files)
        setAddItemFormData({ ...addItemFormData, url: response.data.url })
        console.log('response.data :', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const addNewItem = async () => {
    setAddItemFormData({ ...addItemFormData, owner: authUserContext.email })
    if (addItemFormData.owner === authUserContext.email && addItemFormData.owner) {
      console.log('We should have an owner: ', addItemFormData.owner)
      try {
        await BackendAPIService.addItem(addItemFormData)
        console.log('Item was added')
        console.log('data: ', addItemFormData)
      } catch (error) {
        console.log('errormessage: ', error)
      }
    } else {
      console.log('The item could not be added')
    }
  }


  return (
    <div className="content">
      <h1>Lägg till objekt</h1>
      <label>Ladda upp bild:
        <input type="file" onChange={handleChangeImageFile} />
      </label>
      <label> Objekttyp:
        <input type="text" required onChange={(event) => setAddItemFormData({ ...addItemFormData, name: event.target.value })} />
      </label>
      <label> Kategori:
        <input type="text" required onChange={(event) => setAddItemFormData({ ...addItemFormData, category: event.target.value })} />
      </label>
      <button onClick={() => addNewItem()}>Spara</button>

      <p>The resulting image will be displayed here</p>
      {addItemFormData.url && (<img src={addItemFormData.url} alt={addItemFormData.name} />)}

    </div>
  )
}
