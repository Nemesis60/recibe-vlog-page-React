import React from "react";
import '../Style/Content.css'
import Details from "./Details";
import Ingredients from "./Ingredients";

function Content () {

    return (
        <div className="Content">
            <Ingredients />
            <Details />
        </div>
    )
}

export default Content;