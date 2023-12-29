import React, { useState } from 'react'
import Card from './Card'
import './Deck.scss'
import { useDrag } from '@use-gesture/react'




function Deck() {

    let cardData = [
        {
            title: "Card 1",
            items: [{
                name: "prova",
                price: "1"
            },
            {
                name: "prova 2",
                price: "2"
            }]
        },
        {
            title: "Card 1",
            items: Array(30).fill({
                name: "prova",
                price: "1"
            })
        },
    ]



    return (
        <div className='Deck'>
            {cardData.map((data, key) => (
                <Card {...data} key={key} />
            ))}
        </div>
    )
}

export default Deck