import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../components/Card'
import Loader from '../components/Loader'

function Gens() {

    const [gens, setgens] = useState(null)

    const id = useParams();

    const gensfetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/games?key=c9b0975296f14e3b8c61581b7daa5dfd&genres=' + id.id)
            .then(res => {
                setgens(res.data.results)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        gensfetch();
        console.log(id)
    }, [])



    return (
        <div>
            { gens ? <div className="popular">

<div className="grid">


    {gens.map(game => (
        <Card game={game}/>
    ))}


        </div>
    </div> 

    :
    <Loader></Loader>
    }
        </div>
    )
}

export default Gens
