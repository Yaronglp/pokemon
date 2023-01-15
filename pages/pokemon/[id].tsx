import Head from 'next/head'
import React from 'react'
import { Details, IDetails } from '../../components/details'
import { POKEMON_BASE_URL, POKEMON_LIST_URL } from '../../utils/constants'

const PokemonDetails = ({pokemon}: {pokemon: IDetails}) => {
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta 
          name={`${pokemon.name} time to explore`} 
          content="Short details about a specific Pokemon"/>
      </Head>
      <Details name={pokemon.name} type={pokemon.type} stats={pokemon.stats} image={pokemon.image}/>
    </>
  )
}

export async function getStaticPaths() {
  const pokemonDataRes = await fetch(POKEMON_LIST_URL)
  const pokemonJSON = await pokemonDataRes.json()

  return {
    paths: pokemonJSON.map((pokemon: any) => ({
      params: { id: pokemon.id.toString() }
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const pokemonData = await fetch(`${POKEMON_BASE_URL}/pokemon/${context.params.id}.json`)
  const pokemonJSON = await pokemonData.json()
  pokemonJSON.image = `${POKEMON_BASE_URL}/${pokemonJSON.image}`
  pokemonJSON.type = pokemonJSON.type[0] || 'unknown'

  return {
    props: {
      pokemon: pokemonJSON
    }
  }
}

export default PokemonDetails