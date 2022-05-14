import React from "react";
import './search.css';
import { useContext } from "react";
import  Context from "../../../context/context.js";



const Search = () => {
    const {SetResultSearch} = useContext(Context);
    return(
        <div className="Container-search">
            <div className="Container-tittle">
                <h1 className="search-tittle">Country search</h1>
                <span className="tittle-icon"></span>
            </div>
            <p className="search-subTittle">Search for a country</p>
            <div className="container-input">
                <span className="input-icon"></span>
                <input 
                    type="text" 
                    placeholder="Search for a country" 
                    className="search-input"
                    onChange={e=>SetResultSearch(e.target.value)}
                />
            </div>
        </div>
       
    )
}
export default Search;