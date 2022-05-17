import React from "react";
import './GroupBy.css'
import context from '../../../context/context'

const GroupBy = () => {
    const {stateGroup,SetstateGroup} = React.useContext(context)
    
    return(
        <div className="Conteiner-GroupBy">
            <h2 className="GroupBy-tittle">Group by :</h2>
            <div className="Container-Specs">
                <button 
                    className={stateGroup === false ? "Specs-Continent buttons" : "Specs-Languanje buttons"}
                    onClick={()=>SetstateGroup(true)}
                    >Continent</button>
                <button 
                    className={stateGroup === false ?  "Specs-Languanje buttons": "Specs-Continent buttons" }
                    onClick={()=>SetstateGroup(false)}
                >Languaje</button>
            </div>
        </div>
    )
}


export default GroupBy;
