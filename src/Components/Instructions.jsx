import React from "react";
import '../Style/Instructions.css'

function Instructions (props) {

    return (
        <div className="Instructions">
            <div className="number">{props.number}</div>
            <p><strong>{props.strong}</strong>{props.content}</p>
        </div>
    )
}

export default Instructions;