import styles from './ItemCards.module.css'
import { useState, useEffect, useContext } from 'react'
import TinderCard from 'react-tinder-card'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import { UserContext } from '../../shared/provider/UserProvider'

export const ItemCards = () => {
  const [items, setItems] = useState<any>([])
  const [authUserContext, setAuthUserContext] = useContext(UserContext);
  const [mappedItem, setMappedItem] = useState<any>([])

  const getAllItemsFromServer = async () => {
    const response = await BackendAPIService.getAllItems()
    setItems(response.data)
  }

  useEffect(() => {
    getAllItemsFromServer()
  }, [])

  console.log('items: ', items)
  console.log('authUserContext: ', authUserContext)


  const userLikedItem = async (item: any) => {
    try {
      await BackendAPIService.userLikedItem({ item, email: authUserContext.email })
      console.log('Item has been liked')
    } catch (error) {
      console.log('Error while trying to like item')
    }
  }

  console.log('mappedItem: ', mappedItem)


  /*  async () => {
    setItems({ ...items, items.interestedUsers.push(authUserContext.email)  })
    try {
      await BackendAPIService.updateUserLikedItemArray({items})
    } catch (error) {
      console.log('Error while trying to update')
    }
  } */

  return (
    <div className={styles.itemCardWrapper}>
      {items.map((item: any) => (
        <TinderCard
          key={item._id}
          onSwipe={() => console.log('onSwipe')}
          onCardLeftScreen={() => console.log('CardLeftScreen')}
        >
          <div className={styles.itemCard}>
            <img className={styles.itemImage} src={item.url} alt='A randome produkt taken from the API' />
            <h2 className={styles.itemTitle}>{item.name}</h2>
            <div className={styles.itemSubtitle}>5km bort • {item.category}</div>
            <button>Nej</button>
            <button onClick={() => userLikedItem(item)}>Ja</button>
          </div>

        </TinderCard>
      ))}


      {/*       <h1>Produkt av typen blabla med id {indexContext}</h1>
      
      <div className='decisionButtonWrapper'>
        <button onClick={() => addCountOnButtonClick()}>Nej tack!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}>Mer än bara gillar, vill absolut ha!!!!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}> Gillar't </button>
      </div> */}
    </div>
  )
}
