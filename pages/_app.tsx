import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'
import { Loading } from '../components/loading'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { ScrollContextProvider } from '../providers/scroll'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    })

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    })

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    })

  }, [])

  const isRouterQueryEmpty = JSON.stringify(router.query) === '{}'
  const isActivatedLink = !isRouterQueryEmpty && !isLoading

  return (
    <>
      <ScrollContextProvider>
        <Header
          customTitle={!isRouterQueryEmpty ? 'Go Back' : undefined} 
          activateLink={ isActivatedLink }/>
        {
          isLoading ? 
          <Loading/> :
        (<WrapperStyled>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </WrapperStyled>)
        }
      </ScrollContextProvider>
    </>
  )
}

const WrapperStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--double-spacer) 2rem;

  @media (max-height: 500px) {
    padding: var(--spacer) 2rem;
  }
`