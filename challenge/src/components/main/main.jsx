import React from "react";
import {useSeachCountry}from '../../hooks/usePaises'
import ResulSearch from "../../molecule/main/ResultSearch";
import Loading from "../../molecule/loading/loading";

const Main = () => {
    
    const {cargar,fail} = useSeachCountry(); ;
    if(cargar){
        return <Loading/>
    }
    if(fail){
        return <h1>Error</h1>
    }
    return( 
        <ResulSearch/>
    )
}

export default Main