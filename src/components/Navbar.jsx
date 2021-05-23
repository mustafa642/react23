import React, { useEffect, useState } from 'react'
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';


function Navbar() {


    const [sidebar, setsidebar] = useState(false)

    const [gens, setgens] = useState(null)

    const [g, setg] = useState(null)

    const ch = (e) => {
        setg(e.target.value)
    }

    const sb = (e) => {
        e.preventDefault();
        window.location = '/search/' + g
    }

    const gensfetch = async () => {
        try {
            axios.get('https://api.rawg.io/api/genres?key=c9b0975296f14e3b8c61581b7daa5dfd')
            .then(res => {
                setgens(res.data.results)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        gensfetch();
    }, [])



    const sidebarhandler = () => {
        setsidebar(!sidebar);
    }

    return (
        <div>

            


            <div className={"sidebar " + ( sidebar ? "hide" : "show")}>
                { gens && 
                <ul>
                    {gens.map(gen => (
                        <li><a href={`/genres/${gen.id}`}>{gen.name}</a></li>
                    ))}
                </ul>
                 }
            </div>



            <nav>
                <motion.label initial={{ y:500 }} animate={{ y:0 }} transition={{ duration:1, type:'spring', stiffness: 120 }} className="navbar-brand"><Link to="/">Gaming</Link></motion.label>
                <form onSubmit={sb}>
                    <input type="text" placeholder="Search" onChange={ch} />
                    <button type="submit"><FaSearch/></button>
                </form>
                <ul>
                    <motion.li initial={{ y:500 }} animate={{ y:0 }} transition={{ duration:1, type:'spring', stiffness: 120, delay:1 }} onClick={sidebarhandler}><FaBars/></motion.li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
