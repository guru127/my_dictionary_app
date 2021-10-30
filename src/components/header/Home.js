import { TextField } from '@material-ui/core';
import React, { useEffect,useState }from 'react'
import './Home.css';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import Cards from '../cards/Cards';


export const Home = () => {
    const [search, setSearch]=useState(false);
    const [word, setValue]=useState('');
   const [meanings, setMeanings]=useState([]);


    const handleChange=(e)=>{
        setValue(e.target.value)
        console.log('value-------> '+ word)

    }
    const dictionryApi = async()=>{
        try{
          const data = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          //  `https://api.dictionaryapi.dev/api/v2/entries/en/life`
            ); 
            
            console.log(data.data)
            setMeanings(data.data)
            setSearch(true)
        }
        catch(error){
          console.log(error);
        }
      }
     
    const handleClick=()=>{
        if(word){
        dictionryApi()
        }
    }

    return (
        <div >
            <div className="header">
                <span className="title">Vacab</span>
               
            </div>
            <div className="body">
            <div className="search">
                <TextField  
                id="standard-basic" 
                value={word}
                onChange={handleChange}
                placeholder="Search here"
                />
                 <SearchIcon id="searchIcon" onClick={handleClick}/>
            </div> 
             {meanings && 
               <Cards
                 word={word}
                 meanings={meanings}
              />}
            </div>
           
        </div>
    )
}
