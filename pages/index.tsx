import Head from 'next/head'
import { Router } from 'next/router'
import React, { useContext, useEffect } from 'react'
import CardList from '../components/cardList'
import { ScrollContext } from '../providers/scroll'
import { POKEMON_BASE_URL, POKEMON_LIST_URL } from '../utils/constants'

interface IPokemonItem {
  id: number
  name: string
  image: string
}

const Pokemon = ({pokemon = []}: {pokemon: IPokemonItem[]}) => {
  const { offsetY, updateOffsetY } = useContext(ScrollContext)

  useEffect(() => {
    const handleRouteChange = (url: unknown) => {
      updateOffsetY(window.pageYOffset)
    }

    Router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [updateOffsetY])

  useEffect(() => {
    if (offsetY > 0) {
      window.scrollTo(0, offsetY)
      setTimeout(() => {
        updateOffsetY(0)
      }, 0)
    }
  }, [offsetY, updateOffsetY])
  
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
