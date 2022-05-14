import React from "react";
import { useFilterCountries } from "../../hooks/useFilter";
import Context from "../../context/context";
import './ResultSearch.css'

const ResultSearch = () => {
  useFilterCountries()
  const {FilterResultCountry} = React.useContext(Context);
  
  return(
    <div className="Container-Result">
      {
        FilterResultCountry.map(item=>(
          <div className="Container-Result-Item" key={item.name}>
              <h2>{item.name}</h2>
              <span>{item.emoji}</span>
          </div>
        ))
      }
    </div>)
}

export default ResultSearch;