import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Card from '../components/Card'

function Single() {


    const [game, setgame] = useState(null)

    const [shot, setshot] = useState(null)



    const id = useParams();


    const gamesfetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/games/' + id.id + '?key=c9b0975296f14e3b8c61581b7daa5dfd')
            .then(res => {
                setgame(res.data)
            })
        } catch (error) {
            
        }
    }

    const shotfetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/games/' + id.id + '/screenshots?key=c9b0975296f14e3b8c61581b7daa5dfd')
            .then(res => {
                setshot(res.data.results)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        gamesfetch();
        shotfetch();
    }, [])







    return (
        <div>
            {
                game ?
                <div>
                    <div className="single">
                    <Zoom left>
                    <div className="img23">
                       <img src={game.background_image} alt="" />
                    </div>
                    </Zoom>
                    <Roll>
                    <div className="content23">
                        <h1>{game.name}</h1>
                        <Rating rating={game.rating}></Rating>
                        <h3>Released: <span>g</span> {game.released}</h3>
                        <a href={game.website} target="_blank">Go to Website</a>
                        <div className="platforms">
                            <h3>Platforms:</h3> <div className="new34">{game.platforms.map(gg => <h2>{gg.platform.name}</h2>)}</div>
                
                        </div>
                        <div className="hell">
                        <img src={game.background_image_additional} alt=""/>
                        </div>
                    </div>
                    </Roll>
                </div>



                <div className="desc">
                <Zoom>
                    <p>{game.description_raw}</p>
                </Zoom>
                </div>


                <div>
                    { shot && 
                        <div className="screens">
                            {shot.map(sho => 
                                <Zoom>
                              <div className="item">
                              <img src={sho.image} alt="" />
                            </div> 
                            </Zoom> 
                            )}
                        </div>
                     }
                </div>


                <div className="devs">
                     <div className="hed">
                         <div className="gg"></div>
                         <h1>Developers</h1>
                     </div>
                     <div className="background">
                         <img src={game.developers[0].image_background} alt="" />
                         <div className="center">{game.developers[0].name}</div>
                     </div>
                </div>




                </div>
                :
                <Loader></Loader>
            }
        </div>
    )
}

export default Single
