import React from 'react'
import './Card.scss'
import { animated } from '@react-spring/web'


interface CardProps {
    title: string
    items?: CardItemProps[]
}

interface CardItemProps {
    name: string
    price: string
}

const CardItem: React.FC<CardItemProps> = (props) => {
    return (
        <div className="CardItem">
            <div className="CardItem__description">
                {props.name}
            </div>
            <div className="CardItem__price">
                {props.price}
            </div>
        </div>
    )
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <animated.div className='Card'>
            <div className="Card__title">
                {props.title}
            </div>
            <div className="Card__content">
                {props.items && props.items.map(
                    (item, key) => <CardItem {...item} key={key} />
                )}
            </div>
        </animated.div>
    )
}

export default Card