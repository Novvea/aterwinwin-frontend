import styles from './ProductCards.module.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TinderCard from 'react-tinder-card'
import { CardContext } from '../../shared/provider/CardProvider'


export const ProductCards = () => {
  const [picsumData, setPicsumData] = useState<any>()
  const { indexContext, setIndexContext } = useContext<any>(CardContext)
  const { likedPicturesContext, setLikedPicturesContext } = useContext<any>(CardContext)

  const getDataFromPicsumAPI = async () => {
    try {
      const serverResponse = await axios.get('https://picsum.photos/v2/list')
      setPicsumData(serverResponse.data[indexContext].download_url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataFromPicsumAPI()
  }, [indexContext])

  const addCountOnButtonClick = () => {
    setIndexContext(indexContext + 1)
  }
  /* console.log('utanför likedPicturesContext:', likedPicturesContext) */
  const likeAndAddCountOnButtonClick = () => {
    setIndexContext(indexContext + 1)
    /* console.log('innanför likedPicturesContext:', likedPicturesContext) */
    setLikedPicturesContext([...likedPicturesContext, picsumData])
  }

  return (
    <div className={styles.productCardWrapper}>
      <TinderCard
        onSwipe={() => console.log('onSwipe')}
        onCardLeftScreen={() => console.log('CardLeftScreen')}
      >
        <div className={styles.productCard}>
          <img className={styles.productImage} src={picsumData} alt='A randome produkt taken from the API' />
          <h2 className={styles.productTitle}>Vattenkanna</h2>
          <div className={styles.productSubtitle}>5km bort • Kök</div>
        </div>
      </TinderCard>
      <TinderCard
        onSwipe={() => console.log('onSwipe')}
        onCardLeftScreen={() => console.log('CardLeftScreen')}
      >
        <div className={styles.productCard}>
          <img className={styles.productImage} src={picsumData} alt='A randome produkt taken from the API' />
          <h2 className={styles.productTitle}>Vattenkanna</h2>
          <div className={styles.productSubtitle}>5km bort • Kök</div>
        </div>
      </TinderCard>
      {/*       <h1>Produkt av typen blabla med id {indexContext}</h1>
      
      <div className='decisionButtonWrapper'>
        <button onClick={() => addCountOnButtonClick()}>Nej tack!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}>Mer än bara gillar, vill absolut ha!!!!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}> Gillar't </button>
      </div> */}
    </div>
  )
}
