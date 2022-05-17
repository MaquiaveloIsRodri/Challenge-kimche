import React from "react";

const Context = React.createContext({});

export function StateContext({children}) {
  const [ResultSearch,SetResultSearch]= React.useState('');//resultado del input
  const [Countries,SetCountries]= React.useState([]);//lista de paises de graph
  const [FilterResultCountry,SetFilterResultCountry]= React.useState([]);//lista de paises pasada por el input
  const [PlaseSearch,SetPlaseSearch]= React.useState(false);//Pais no encontrado
  const [performSearch,SetperformSearch]= React.useState(false);//Primera busqueda
  const [stateGroup,SetstateGroup]= React.useState(false);//Separacion de los grupos
  const [Europa,setEuropa]= React.useState([]);//lista de paises de europa
  const [Asia,setAsia]= React.useState([]);//lista de paises de asia
  const [southAmerica,setSouthAmerica]= React.useState([]);//lista de paises de america
  const [northAmerica,setNorthAmerica]= React.useState([]);//lista de paises de america
  const [Africa,setAfrica]= React.useState([]);//lista de paises de africa
  const [Oceania,setOceania]= React.useState([]);//lista de paises de oceania
  const [Antarctica,setAntarctica]= React.useState([]);//lista de paises de antartica

  return(
    <Context.Provider value={{
        ResultSearch,
        SetResultSearch,
        Countries,
        SetCountries,
        FilterResultCountry,
        SetFilterResultCountry,
        PlaseSearch,
        SetPlaseSearch,
        performSearch,
        SetperformSearch,
        stateGroup,
        SetstateGroup
        ,Europa,
        setEuropa,
        Asia,
        setAsia,
        southAmerica,
        setSouthAmerica,
        northAmerica,
        setNorthAmerica,
        Africa,
        setAfrica,
        Oceania,
        setOceania,
        Antarctica,
        setAntarctica
      }}>
        {children}
    </Context.Provider>
  )
}

export default Context;