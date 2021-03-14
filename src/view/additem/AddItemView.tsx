import { useState } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import CloudinaryAPIService from '../../shared/api/service/CloudinaryAPIService'
import styles from './AddItemView.module.css'
//import axios from 'axios'

export const AddItemView = () => {
  const [addItemFormData, setAddItemFormData] = useState({
    itemname: '',
    category: '',
    imageUrl: ''
  })

  const handleChangeImageFile = async (event: any) => {
    if (event.target.files) {
      try {
        const response = await CloudinaryAPIService.uploadOrUpdateImage(event.target.files)
        setAddItemFormData({ ...addItemFormData, imageUrl: response.data.url })
        console.log('response.data :', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  /*   const handleChangeImageFile = async (event: any) => {
      if (event.target.files) {
        const formData = new FormData()
        formData.append('file', event.target.files[0])
        formData.append('upload_preset', 'xjrgcel9')
   
        axios.post('https://api.Cloudinary.com/v1_1/novve/image/upload/ ', formData)
          .then(response => { console.log('aa', response.data); setAddItemFormData({ ...addItemFormData, imageUrl: response.data.url }) })
          .catch(err => console.log(err))
      }
    } */

  const addNewItem = async () => {
    try {
      await BackendAPIService.addItem(addItemFormData)
      console.log('Item was added')
      console.log('data: ', addItemFormData)
    } catch (error) {
      console.log('errormessage: ', error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>Lägg till objekt</h1>
      <label>Ladda upp bild:
        <input type="file" onChange={handleChangeImageFile} />
      </label>
      <label> Objekttyp:
        <input type="text" required onChange={(event) => setAddItemFormData({ ...addItemFormData, itemname: event.target.value })} />
      </label>
      <label> Kategori:
        <input type="text" required onChange={(event) => setAddItemFormData({ ...addItemFormData, category: event.target.value })} />
      </label>
      <button onClick={() => addNewItem()}>Spara</button>

      <p>The resulting image will be displayed here</p>
      {addItemFormData.imageUrl && (<img src={addItemFormData.imageUrl} alt={addItemFormData.itemname} />)}
    </div>
  )
}
