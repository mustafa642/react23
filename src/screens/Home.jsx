import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Loader from '../components/Loader'

function Home() {

    const [games, setgames] = useState(null)

    const [games2, setgames2] = useState(null)


    const gamesfetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/games?key=c9b0975296f14e3b8c61581b7daa5dfd&dates=2020-01-01,2020-12-31&ordering=-added&page_size=10')
            .then(res => {
                setgames(res.data.results)
            })
        } catch (error) {
            
        }
    }



    const games2fetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/games?key=c9b0975296f14e3b8c61581b7daa5dfd&dates=2021-05-23,2021-12-31&ordering=-added&page_size=10')
            .then(res => {
                setgames2(res.data.results)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        gamesfetch();
        games2fetch();
    }, [])




    return (
        <div>
            
                
                {
                    games ? 


                    <div className="popular">

                            <div className="tw">
                                <div className="t3"></div>
                            <h2>Top Games Of 2020</h2>
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


{
                    games2 ? 


                    <div className="popular">

                            <div className="tw">
                                <div className="t3"></div>
                            <h2>Upcoming Games</h2>
                            </div>

                    <div className="grid">


                        {games2.map(game => (
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

export default Home
