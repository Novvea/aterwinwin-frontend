import { useState } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import styles from './AddItemView.module.css'

export const AddItemView = () => {
  const [addItemFormData, setAddItemFormData] = useState({
    itemname: '',
    category: ''
  })

  const addNewItem = async () => {
    try {
      await BackendAPIService.addItem(addItemFormData)
      console.log('Item was added')
    } catch (error) {
      console.log('errormessage: ', error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>Lägg till objekt</h1>
      <div>Ladda upp bild</div>
      <label> Objekttyp:
        <input type="text" required onChange={(event) => setAddItemFormData({ ...addItemFormData, itemname: event.target.value })} />
      </label>
      <label> Kategori:
        <input type="text" required onChange={(event) => setAddItemFormData({ ...addItemFormData, category: event.target.value })} />
      </label>
      <button onClick={() => addNewItem()}>Spara</button>
    </div>
  )
}
