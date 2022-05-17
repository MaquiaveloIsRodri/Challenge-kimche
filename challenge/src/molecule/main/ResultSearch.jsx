import React from "react";
import Context from "../../context/context";
import './ResultSearch.css'
import {useContinent} from '../../hooks/useContinent.js'


const ResultSearch = () => {
  const {FilterResultCountry,stateGroup,Africa , Antarctica, Asia, Europa , northAmerica ,southAmerica,Oceania} = React.useContext(Context);
  useContinent();
  return(
    stateGroup === false 
    ?
    <div className="Container-Result-languaje">
      {
        FilterResultCountry.map(item=>(
          <div className="Container-Result-Item" key={item.name}>
              {
                <div>
                  <h2 className="Result-Item-group">{
                    item.languages.length === 0  ?null:item.languages[0].name}
                  </h2>
                  <div className="Container-Item-languaje">
                    <div className="conteiner-text">
                      <h2 className="item-name">{item.name}</h2>
                      <span className="item-emoji">{item.emoji}</span>
                    </div>
                    <p className="item-currency">Currency: {item.currency}</p>
                    <p className="item-capital">Capital: {item.capital}</p>
                    <p className="item-phone">Cell phone code: {item.phone}</p>
                  </div>
                </div>
                
              }
          </div>
        ))
      }
    </div>
    :
    <div>
      {
        Africa.length!==0
        ? 
        <div className="container-continent">
          <h2 className="Result-Item-tittle">Africa</h2>
          <div className="Container-continent-country">
            {Africa
            .map(item=>(
            
              <div className="Container-Item" key={item.name}>
                <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
           
            ))
            }
          </div>
          
        </div>
        : null
      }
      {
        Europa.length!==0
        ? 
        <div className="container-continent" >
          <h2 className="Result-Item-tittle">Europe</h2>
          <div className="Container-continent-country">
            {Europa
            .map(item=>(
            
              <div className="Container-Item" key={item.name}>
               <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
           
            ))
            }
          </div>
          
        </div>
        : null
      }
      {
        Asia.length!==0
        ? 
        <div className="container-continent">
          <h2 className="Result-Item-tittle">Asia</h2>
          <div className="Container-continent-country">
            {Asia
            .map(item=>(
              <div className="Container-Item" key={item.name}>
                <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
           
            ))
            }
          </div>
          
        </div>
        : null
      }
      {
        southAmerica.length!==0
        ? 
        <div className="container-continent">
          <h2 className="Result-Item-tittle">South America</h2>
          <div className="Container-continent-country">
            {southAmerica
            .map(item=>(
            
              <div className="Container-Item" key={item.name}>
                <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
           
            ))
            }
          </div>
          
        </div>
        : null
      }
      {
        northAmerica.length!==0
        ? 
        <div className="container-continent">
          <h2 className="Result-Item-tittle">North America</h2>
          <div className="Container-continent-country">
            {northAmerica
            .map(item=>(
            
              <div className="Container-Item" key={item.name}>
                <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
           
            ))
            }
          </div>
          
        </div>
        : null
      }
      {
        Oceania.length!==0
        ? 
        <div className="container-continent">
          <h2 className="Result-Item-tittle"> Oceania</h2>
          <div className="Container-continent-country">
            {Oceania
            .map(item=>(
              <div className="Container-Item" key={item.name}>
                <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
            ))
            }
          </div>
          
        </div>
        : null
      }
      {
        Antarctica.length!==0
        ? 
        <div className="container-continent">
          <h2 className="Result-Item-tittle">Antarctica</h2>
          <div className="Container-continent-country">
            {Antarctica
            .map(item=>(
              <div className="Container-Item" key={item.name}>
                <div className="conteiner-text">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-emoji">{item.emoji}</span>
                </div>
                <p className="item-currency">Currency: {item.currency}</p>
                <p className="item-capital">Capital: {item.capital}</p>
                <p className="item-phone">Cell phone code: {item.phone}</p>
              </div>
            ))
            }
          </div>
          
        </div>
        : null
      }
    </div>

    )
    

}

export default ResultSearch;

  //   //Africa.length === 0 
  //   //? null 
  //   //: <div className="Containter-contienent">
  //   //  <h2 className="Result-Item-group">Africa</h2>
  //   //  <div className="Container-Result">
  //   //    {
  //   //      Africa.map(item=>(
  //   //        <div className="Container-Item">
  //   //              <h2 className="item-name">{item.name}</h2>
  //   //              <span className="item-emoji">{item.emoji}</span>
  //   //              <p className="item-currency">Currency: {item.currency}</p>
  //   //              <p className="item-capital">Capital: {item.capital}</p>
  //   //              <p className="item-phone">Cell phone code: {item.phone}</p>
  //   //        </div>
  //   //      ))
  //   //    }
  //   //  </div>
  //   //</div>
  // }
  // {//
  //   //Europa.length === 0 
  //   //? null 
  //   //: <div className="Containter-contienent">
  //   //  <h2 className="Result-Item-group">Europa</h2>
  //   //  <div className="Container-Result">
  //   //    {
  //   //      Europa.map(item=>(
  //   //        <div className="Container-Item">
  //   //              <h2 className="item-name">{item.name}</h2>
  //   //              <span className="item-emoji">{item.emoji}</span>
  //   //              <p className="item-currency">Currency: {item.currency}</p>
  //   //              <p className="item-capital">Capital: {item.capital}</p>
  //   //              <p className="item-phone">Cell phone code: {item.phone}</p>
  //   //        </div>
  //   //      ))
  //   //    }
  //   //  </div>
  //   //</div>
  // 