import styles from './AddItemButton.module.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

//se om användaren är inloggad eller inte
//flytta till lägg till object eller bli medlem

export const AddItemButton = () => {
  const history = useHistory();

  const moveToAddItemViewOrSignUp = () => {
    history.push(RoutingPath.addItemView)
  }

  return (
    <div className={styles.wrapper}>

      <button className={styles.button} onClick={() => moveToAddItemViewOrSignUp()}>Lägg till objekt</button>
    </div>
  )
}
