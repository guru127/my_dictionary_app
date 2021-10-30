import React from 'react'
import "./Cards.css"

const Cards = ({word, meanings}) => {
    return (
        
        <div className="cards">
        {word&& <div className= "word"><b>{word}</b></div>}
        {word === ""?(<span>Start searching</span>
        ):(
           meanings.map((mean) =>
                 mean.meanings.map((item)=>
                    item.definitions.map((def) =>(
                        <div className="meaning">
                            <b>{def.definition}</b>
                            <hr id="line"></hr>
                            {def.example && (
                                <div>
                                    <b>Example : </b>
                                    {def.example}
                                </div>
                            )}
                            {def.synonyms && (
                                <div>
                                    <b>Synonyms : </b>
                                    {def.synonyms.map((s)=>`${s}, `)}
                                </div>
                                //def.synonyms.map((s)=>{})
                               )}
                        </div>      
                   ))
              )
           )
        )}  
    </div>
    )
}

export default Cards
