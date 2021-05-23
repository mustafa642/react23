import React from 'react'
import {motion} from 'framer-motion'

function Loader() {
    return (
        <div className="loader">
           <motion.div animate={{ x:[-20, 20], y:[20, -20], transition:{ yoyo: Infinity, easings: 'easeInOut' } }} className="span"></motion.div>
           <motion.div animate={{ x:20, y:-20, transition:{ yoyo: Infinity, easings: 'easeInOut' } }} className="span"></motion.div>
        </div>
    )
}

export default Loader
