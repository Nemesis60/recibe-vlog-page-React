import React from "react";
import '../Style/Header.css'

function Header () {

    return (
        <div className="Header">
            <h1>Classic Cheesecake Recipe</h1>
            <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired
                with a buttery graham cracker crust, no one can deny its simple decadence.
                For the best results, bake in a water bath
            </p>
            <img src={require('../Images/photo1.png')} alt="Cake" />
        </div>
    )
}

export default Header;