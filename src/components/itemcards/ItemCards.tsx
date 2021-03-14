import styles from './ItemCards.module.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TinderCard from 'react-tinder-card'
import { CardContext } from '../../shared/provider/CardProvider'
import BackendAPIService from '../../shared/api/service/BackendAPIService'


export const ItemCards = () => {
  const [items, setItems] = useState([])

  const getAllItemsFromServer = async () => {
    const response = await BackendAPIService.getAllItems()
    console.log('response.data: ', response.data)
    setItems(response.data)
  }
  useEffect(() => {
    getAllItemsFromServer()
  }, [])
  console.log('items: ', items)

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
