import styles from './ItemCards.module.css'
import { useState, useEffect, useContext } from 'react'
import TinderCard from 'react-tinder-card'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import { UserContext } from '../../shared/provider/UserProvider'

export const ItemCards = () => {
  const [items, setItems] = useState<any>([])
  const [authUserContext] = useContext(UserContext);

  const getAllItemsFromServer = async () => {
    const response = await BackendAPIService.getAllItems()
    setItems(response.data)
  }

  useEffect(() => {
    getAllItemsFromServer()
  }, [])


  const userLikedItem = async (item: any) => {
    try {
      await BackendAPIService.userLikedItem({ id: item._id, email: authUserContext.email })
    } catch (error) {
      console.log('Error while trying to like item')
    }
  }

  const userDislikedItem = async (item: any) => {
    try {
      await BackendAPIService.userDislikedItem({ id: item._id, email: authUserContext.email })
    } catch (error) {
      console.log('Error while trying to dislike item')
    }
  }

  const handleSwipeCard = (item: any, direction: string) => {
    if (direction === 'right') {
      userLikedItem(item)
    }
    if (direction === 'left') {
      userDislikedItem(item)
    }
  }

  console.log('items', items)
  return (
    <div className={styles.itemCardWrapper}>
      {items.map((item: any) => (
        <TinderCard
          key={item._id}
          preventSwipe={["up", "down"]}
          onSwipe={(direction: string) => handleSwipeCard(item, direction)}
        >
          <div className={styles.itemCard}>
            <img className={styles.itemImage} src={item.url} width={512} height={512} alt='A random produkt taken from the API' />
            <h2 className={styles.itemTitle}>{item.name}</h2>
            <div className={styles.itemSubtitle}>5km bort • {item.category}</div>
            <button className={styles.button} onClick={() => userDislikedItem(item)}><svg className={styles.svg} width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="43.5" cy="43.5" r="41.5" fill="#E9FFC6" stroke="#EB5757" stroke-width="4" />
              <circle cx="43.5" cy="43.5" r="32.5" fill="#EB5757" stroke="#EB5757" stroke-width="4" />
              <path d="M59.75 31.4225L56.5775 28.25L44 40.8275L31.4225 28.25L28.25 31.4225L40.8275 44L28.25 56.5775L31.4225 59.75L44 47.1725L56.5775 59.75L59.75 56.5775L47.1725 44L59.75 31.4225Z" fill="#E9FFC6" />
            </svg>
            </button>
            <button className={styles.button} onClick={() => userLikedItem(item)}><svg className={styles.svg} width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="43.5" cy="43.5" r="41.5" fill="#E9FFC6" stroke="#49984C" stroke-width="4" />
              <circle cx="43.5" cy="43.5" r="32.5" fill="#49984C" stroke="#49984C" stroke-width="4" />
              <path d="M37.25 53.3825L27.8675 44L24.6725 47.1725L37.25 59.75L64.25 32.75L61.0775 29.5775L37.25 53.3825Z" fill="#E9FFC6" />
            </svg>
            </button>
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
