import React,{useEffect} from "react";
import Context  from "../../context/context";
import {useSeachCountry}from '../../hooks/usePaises'
import ResulSearch from "../../molecule/main/ResultSearch";
import Loading from "../../molecule/loading/loading";
import ResultError from "../../molecule/error/error";
import NoData from "../../molecule/nodata/nodata";
import { useFilterCountries } from "../../hooks/useFilter";
import PerformSearch from "../../molecule/PerformSearch/PerformSearch";

const Main = () => {
    const {FilterResultCountry,
        SetPlaseSearch,
        PlaseSearch,
        ResultSearch,
        performSearch,
        SetperformSearch
    } = React.useContext(Context); 
    useFilterCountries()
    useEffect(()=>{
        if(ResultSearch.length===0){
            SetperformSearch(true)
        }else{
            SetperformSearch(false)
        }
        if (FilterResultCountry.length===0) {
            SetPlaseSearch(true)
        }else{
            SetPlaseSearch(false)
        }
    },[FilterResultCountry,ResultSearch])

    const {cargar,fail} = useSeachCountry();
    if(cargar){
        return <Loading/>
    }
    if(fail){
        return <ResultError/>
    }
    if(performSearch){
        return <PerformSearch/>
    }
    if(PlaseSearch){
        return <NoData/>
    }
    return( 
        <ResulSearch/>
    )
}

export default Main
