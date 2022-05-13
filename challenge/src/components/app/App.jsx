import './App.css';
import React from 'react';
import Header from '../header/header.jsx';
import Main from '../main/main';
import { useQuery,gql } from '@apollo/client';

const PEPIT = gql`
    query{
        countries{
		    name
        }
    }
`

function App() {
  const { loading, error, data } = useQuery(PEPIT);

  return (
      <div>
        <Header />
        <Main/>
      </div>
  );
}

export default App;
