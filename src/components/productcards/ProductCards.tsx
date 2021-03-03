import './ProductCards.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CardContext } from '../../shared/provider/CardProvider'


export const ProductCards = () => {
  const [picsumData, setPicsumData] = useState<any>()
  const {indexContext, setIndexContext} = useContext<any>(CardContext)
  const {likedPicturesContext, setLikedPicturesContext} = useContext<any>(CardContext)
  
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
  console.log('utanför likedPicturesContext:', likedPicturesContext)
  const likeAndAddCountOnButtonClick = () => {
    setIndexContext(indexContext + 1)
    console.log('innanför likedPicturesContext:', likedPicturesContext)
    setLikedPicturesContext([...likedPicturesContext, picsumData])
  }

  return (
    <div className='productCardWrapper'>
      <h1>Produkt av typen blabla med id {indexContext}</h1>
      <img className='imgPicsum' src={picsumData} alt='A randome produkt taken from the API'/>
      <div className='decisionButtonWrapper'>
        <button onClick={() => addCountOnButtonClick()}>Nej tack!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}>Mer än bara gillar, vill absolut ha!!!!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}> Gillar't </button>
      </div>
    </div>
  )
}
