import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Data () {

    //making a state to set data in x
    //setting up a useEffect to control my components lifecycle x
    //organize API links / url x
    // make the darn API call, right?
    //set our data in state and log it
    // render our data
    //setup Guard Opeartor

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/ditto"

        const getPokemon = async () => {
          const response = await axios.get(url)
          console.log(response)
          setPokemon(response.data)
        }

        getPokemon()

    }, [])


      console.log(pokemon)

      if (pokemon && pokemon.name) {
          return ( 
          <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default}/>
          </div>
        )
      } else {
        return (
          <h1> loading please wait </h1>
        )
      }


  
}