import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import Zoom from "react-reveal/Zoom"

function Card(props) {

    const [loaded, setloaded] = useState(false)


    const imgloaded = () => {
        setloaded(true)
    }


    return (
        <Zoom>
        <div className="grid-item">
           <div className="img">
            <Link to={`/games/${props.game.id}`}><img onLoad={imgloaded} src={props.game.background_image} alt="game-img" /></Link>
           {!loaded && <div className="overlay"><ClipLoader color="white" /></div>}
           </div>
           <div className="content">
               <h3>{props.game.name}</h3>
           </div>
        </div>
        </Zoom>
    )
}

export default Card
