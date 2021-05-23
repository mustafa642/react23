import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../components/Card'
import Loader from '../components/Loader'

function Search() {

    const [games, setgames] = useState(null)

    const id = useParams();


    const gamesfetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/games?key=c9b0975296f14e3b8c61581b7daa5dfd&search=' + id.quiz)
            .then(res => {
                setgames(res.data.results)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        gamesfetch();
    }, [])



    return (
        <div>
            {
                    games ? 


                    <div className="popular">

                            <div className="tw">
                                <div className="t3"></div>
                            <h2>Searched Games</h2>
                            </div>

                    <div className="grid">


                        {games.map(game => (
                        <Card game={game}/>
                        ))}


                    </div>
                    </div>
                    :
                    <Loader/>
                }
        </div>
    )
}

export default Search
