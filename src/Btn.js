import React from "react"
import { motion } from "framer-motion";

function Btn(props) {
    return (

        <motion.a
            href={props.link}
            className="w-28 py-3 border-2 rounded-lg inline-block hover:bg-white hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

        >
            {props.name}
        </motion.a>
    )
}

export default Btn
