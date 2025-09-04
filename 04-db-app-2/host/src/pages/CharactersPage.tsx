import React, { useEffect, useRef } from 'react'
import ErrorHandler from '../components/ErrorHandler'
import placeCards from "cards/placeCards";

const CharactersPage = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    placeCards(cardsRef.current);
  }, [])

  return (
    <>
      <ErrorHandler>
        <div ref={cardsRef}></div>
      </ErrorHandler>
    </>
  )
}

export default CharactersPage
