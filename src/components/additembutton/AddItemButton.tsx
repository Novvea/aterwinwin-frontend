import styles from './AddItemButton.module.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'

export const AddItemButton = () => {
  const history = useHistory();
  const [authUserContext, setAuthUserContext] = useContext(UserContext)

  const moveToAddItemViewOrSignUp = () => {
    authUserContext
      ?
      history.push(RoutingPath.addItemView)
      :
      history.push(RoutingPath.signUpView)
  }

  return (
    <div className={styles.wrapper}>

      <button className={styles.button} onClick={() => moveToAddItemViewOrSignUp()}>Lägg till objekt</button>
    </div>
  )
}
