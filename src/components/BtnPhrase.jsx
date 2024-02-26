import React from 'react'
import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrImg from '../utils/arrImg.json'

const BtnPhrase = ({ setPhraseRandom, setImgSelected }) => {

    const handleClick = () => {
        const phrase = getRandomFromArray(phrases)
        setPhraseRandom(phrase)

        const background = getRandomFromArray(arrImg)
        setImgSelected(background)
    }

    return (
        <button className='card__btn' onClick={handleClick}>BtnPhrase</button>
    )
}

export default BtnPhrase