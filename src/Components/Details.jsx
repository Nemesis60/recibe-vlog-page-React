import React from "react";
import '../Style/Details.css';

function Details () {

    return(
        <div className="Details">
            <div className="box-detail">
                <p><span class="material-symbols-outlined highlight">local_dining</span></p>
                <div className="details-content">
                    <p className="content1">Yields</p>
                    <p className="content2 highlight">12 Servings</p>
                </div>
            </div>
            <div className="commons">
                <div className="box-detail">
                    <p><span class="material-symbols-outlined">schedule</span></p>
                    <div className="details-content">
                        <p className="content1">Prep Time</p>
                        <p className="content2">45 minutes</p>
                    </div>
                </div>
                <div className="box-detail">
                    <p><span class="material-symbols-outlined">schedule</span></p>
                    <div className="details-content">
                        <p className="content1">Cook Time</p>
                        <p className="content2">1 hour</p>
                    </div>
                </div>
                <div className="box-detail">
                    <p><span class="material-symbols-outlined">schedule</span></p>
                    <div className="details-content">
                        <p className="content1">Total Time</p>
                        <p className="content2">7,75 hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;