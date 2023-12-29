import React from 'react'
import AppBar from '../components/AppBar/AppBar'
import Deck from '../components/Cards/Deck'

const Main: React.FC = () => {
  return (
    <div className='Main page'>
      <AppBar />
      <Deck />
    </div>
  )
}


export default Main