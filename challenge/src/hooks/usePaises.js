import { useQuery  ,  useLazyQuery} from "@apollo/client";
import {ALL_COUNTRY} from "../GraphQl/query";
import Context from "../context/context";
import { useContext,useEffect } from "react";

export const useSeachCountry = () => {
    const {loading,data,error} = useQuery(ALL_COUNTRY);
    const {SetCountries}=useContext(Context);
    useEffect(()=>{
        if(data){
            SetCountries(data.countries);
        }
    },[data])    
    return {
        cargar:loading,
        fail:error
    }

}