import React from "react"

function Btn (props) {
    console.log(props)
    return (
        <div className="w-28 py-3 border-2 rounded-lg inline-block hover:bg-white hover:text-gray-600">
            <a href={props.link}><h3>{props.name}</h3></a>
        </div>
    )
}

export default Btn