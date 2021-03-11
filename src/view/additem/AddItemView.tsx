import styles from './AddItemView.module.css'

export const AddItemView = () => {

  return (
    <div className={styles.wrapper}>
      <h1>Lägg till objekt</h1>
      <div>Ladda upp bild</div>
      <label> Objekttyp:
        <input type="text" required />
      </label>
      <label> Kategori:
        <input type="text" required />
      </label>
    </div>
  )
}
