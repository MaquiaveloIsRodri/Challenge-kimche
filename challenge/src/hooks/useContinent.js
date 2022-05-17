import React, { useEffect } from "react";
import Context from "../context/context";

export const useContinent = () => {
    const {FilterResultCountry , setAfrica , setAntarctica,setOceania, setAsia, setEuropa , setNorthAmerica ,setSouthAmerica,Africa , Antarctica, Asia, Europa , northAmerica ,southAmerica,Oceania} = React.useContext(Context);
    useEffect(()=>{
        setAfrica(FilterResultCountry.filter(item=>item.continent.name === "Africa"))
        setAntarctica(FilterResultCountry.filter(item=>item.continent.name === "Antarctica"))
        setOceania(FilterResultCountry.filter(item=>item.continent.name === "Oceania"))
        setAsia(FilterResultCountry.filter(item=>item.continent.name === "Asia"))
        setEuropa(FilterResultCountry.filter(item=>item.continent.name === "Europe"))
        setNorthAmerica(FilterResultCountry.filter(item=>item.continent.name === "North America"))
        setSouthAmerica(FilterResultCountry.filter(item=>item.continent.name === "South America"));
    },[FilterResultCountry]);
  
    }





   //if(country.continent.name === "Europe"){
   //    setEuropa([...Europa,country]);
   //}
   //if(country.continent.name === "Asia"){
   //    setAsia([...Asia,country]);
   //}  
   //if(country.continent.name === "South America"){
   //    setSouthAmerica([...southAmerica,country]);
   //}
   //if(country.continent.name === "North America"){
   //    setNorthAmerica([...northAmerica,country]);
   //}
   //if(country.continent.name === "Africa"){
   //    setAfrica([...Africa,country]);
   //}
   //if(country.continent.name !== "Europe" && country.continent.name !== "Africa" && country.continent.name !== "Antarctica" && country.continent.name !== "Asia" && country.continent.name !== "North America" && country.continent.name !== "South America" && country.continent.name !== "Oceania"){
   //    setEuropa([]);
   //}
   //if(country.continent.name === "Oceania"){
   //    setOceania([...Oceania,country]);
   //}
   //if(country.continent.name === "Antarctica"){
   //    setAntarctica([...Antarctica,country]);
   //}






//useEffect(()=>{
//    const recargarPaises=(props)=>{
//      switch(props.continent.name){
//        case 'Europe':
//            setEuropa(props)
//            console.log(Europa)
//            break;
//        case 'Asia':
//            setAsia(props)
//            break;
//        case 'North America':
//            setNorthAmerica(props)
//            break;
//        case 'South America':
//          setSouthAmerica(props)
//          break;
//        case 'Africa':
//            setAfrica(props)
//            break;
//        case 'Oceania':
//            setOceania(props)
//            break;
//        case 'Antarctica':
//            setAntarctica(props)
//            break;
//        default:
//          null;
//      }
//    }
//  },[FilterResultCountry])
//    
//  return(recargarPaises)