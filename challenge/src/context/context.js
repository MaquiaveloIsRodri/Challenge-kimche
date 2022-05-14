import React from "react";

const Context = React.createContext({});

export function StateContext({children}) {
  const [Dark,setDark]= React.useState(false);
  const [ResultSearch,SetResultSearch]= React.useState('');
  const [Countries,SetCountries]= React.useState([]);
  const [FilterResultCountry,SetFilterResultCountry]= React.useState([]);
  return(
    <Context.Provider value={{
      Dark,
      setDark,
      ResultSearch,
      SetResultSearch,
      Countries,
      SetCountries,
      FilterResultCountry,
      SetFilterResultCountry
      }}>
        {children}
    </Context.Provider>
  )
}

export default Context;