import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

export const Loading = () => {
  return (
    <LoaderStyled/>
  )
}

const LoaderStyled = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`