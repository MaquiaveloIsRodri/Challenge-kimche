import Context from "../context/context";
import { useContext, useEffect } from "react";

export const useFilterCountries=()=>{
    const {Countries,ResultSearch,SetFilterResultCountry,Setlanguaje}=useContext(Context);
    useEffect(()=>{
        const filterCountries=Countries.filter(country=>{
        return country.name.toLowerCase().includes(ResultSearch.toLowerCase())});
        
        
        SetFilterResultCountry(filterCountries);

    },[ResultSearch])
}
