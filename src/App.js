import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';

function App() {
   const [meanigs, setMeanings]=useState([]);
   const [word, setWord]=useState([]);
  const dictionryApi = async()=>{
    try{
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
        ); 
        setMeanings(data.data)
    }
    catch(error){
      console.log(error);
    }
  }
  console.log(meanigs);

  useEffect(()=>{
      dictionryApi();
  },[])

  return (
    <div className="App" >
       <Container className="conatiner" maxWidth="md">
         <Header/>
       </Container>
    </div>
  );
}

export default App;
