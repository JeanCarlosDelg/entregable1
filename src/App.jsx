import { useState } from 'react'
import './App.css'
import './components/styles/BtnPhrase.css'
import './components/styles/PhraseCard.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImg from './utils/arrImg.json'

function App() {
  
  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialImg = getRandomFromArray(arrImg)
  const [imgSelected, setImgSelected] = useState(1)

  const objStyle = {
    backgroundImage: `url("/fondo${imgSelected}.jpg")`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>
      <PhraseCard phraseRandom={phraseRandom} />
      <BtnPhrase 
      setImgSelected={setImgSelected}
      setPhraseRandom={setPhraseRandom} />
      </article>
    </div>
  )
}

export default App
