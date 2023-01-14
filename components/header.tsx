import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React from 'react'

export interface IHeader {
  activateLink?: boolean
  customTitle?: string
}

const Header = ({activateLink = true, customTitle = 'Who\'s your favorite?'}: IHeader) => {
  const title = `Pokemon - ${customTitle}`

  return (
    <HeaderStyled>
      <Typography variant="h4" component="h4">
        {
          activateLink ? <Link href="/">{title}</Link> : title
        }     
      </Typography>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid var(--gray);
  height: var(--spacer);
  background: var(--white);
  z-index: 1;

  a:hover{
    display: inline-block;
    scale: 1.1;
  }
`

export default Header
