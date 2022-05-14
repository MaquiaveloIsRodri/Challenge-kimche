import React from "react";
import './GroupBy.css'
const GroupBy = () => {
    return(
        <div className="Conteiner-GroupBy">
            <h2 className="GroupBy-tittle">Group by :</h2>
            <div className="Container-Specs">
                <button className="Specs-Continent buttons">Continent</button>
                <button className="Specs-Languanje buttons">Languaje</button>
            </div>
        </div>
    )
}

export default GroupBy;
