import './MyProfileView.css'
import {useContext} from 'react'
import {CardContext} from '../../../shared/provider/CardProvider'

export const MyProfileView = () => {

  const {likedPicturesContext, setLikedPicturesContext} = useContext<any>(CardContext)
  console.log('In mu profileview: likedPicturesContext', likedPicturesContext)

  const displayLikedPicturesIfThereAreAny = () => {
    return likedPicturesContext.length > 0
    ?
    <>
      <h2>Jag har gillat följande bilder:</h2>
      <ul className='likedPictures'>
        {likedPicturesContext.map((pic:string) => <li><img key={pic} src={pic} alt='Product'/></li>)}
      </ul>
    </>
  :
    <h2>Du har ännu inte gillat några bilder</h2>
  }

  return(
    <div>
      <h1>Detta är min profilsida</h1>
      {displayLikedPicturesIfThereAreAny()}

      <ul>
        <li>Lägg till info om användaren</li>
        <li>Visa upplagda föremål</li>
        <li>Visa gillade och supergillade föremål</li>
        <li>Visa önskelistan</li>
      </ul>
    </div>
  )
}