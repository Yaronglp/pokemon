import Head from 'next/head'
import React from 'react'
import CardList from '../components/cardList'
import { POKEMON_BASE_URL, POKEMON_LIST_URL } from '../utils/constants'

interface IPokemonItem {
  id: number
  name: string
  image: string
}

const Pokemon = ({pokemon = []}: {pokemon: IPokemonItem[]}) => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta 
          name="Pokemon list" 
          content="List of Pokemon, can you catch them all?"/>
      </Head>
      <CardList cards={pokemon}/>
    </>
  )
}

export async function getStaticProps() {
  const pokemonData = await fetch(POKEMON_LIST_URL)
  const pokemonJSON = await pokemonData.json()
  const normalizedPokemonList = pokemonJSON.map((pokemon: any) => ({
    ...pokemon,
    image: `${POKEMON_BASE_URL}/${pokemon.image}`
  }))

  return {
    props: {
      pokemon: normalizedPokemonList
    }
  }
}

export default Pokemon
