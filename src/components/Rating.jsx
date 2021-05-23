import React from 'react'
import { BsStar, BsStarFill } from "react-icons/bs"

function Rating(props) {
    return (
        <div className="rating">
            <span>{ props.rating >= 1 ? <BsStarFill/> : <BsStar/>}</span>
            <span>{ props.rating >= 2 ? <BsStarFill/> : <BsStar/>}</span>
            <span>{ props.rating >= 3 ? <BsStarFill/> : <BsStar/>}</span>
            <span>{ props.rating >= 4 ? <BsStarFill/> : <BsStar/>}</span>
            <span>{ props.rating >= 5 ? <BsStarFill/> : <BsStar/>}</span>
        </div>
    )
}

export default Rating
