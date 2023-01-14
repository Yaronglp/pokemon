import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import React from 'react'
import { EPicSize, Picture } from './picture'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

interface IItem{
  name: string
  value: number
}

export interface IDetails {
  name: string
  type: string
  stats: IItem[]
  image: string
}

const SX_STYLED_FOR_TYPOGRAPHY = { mt: 2 }

export const Details = ({name, type, stats, image}: IDetails) => {
  return (
    <ContainerStyled>
      <Picture image={image} size={EPicSize.large}/>
      <InfoWrapperStyled>
        <NameContainerStyled>
        <Typography sx={SX_STYLED_FOR_TYPOGRAPHY} variant="h4" component="h4">
          {name}
        </Typography>
        <Typography sx={SX_STYLED_FOR_TYPOGRAPHY} variant="h6" component="h6">
          ({type})
        </Typography>
        </NameContainerStyled>
        <StatsStyled>
          <Typography sx={SX_STYLED_FOR_TYPOGRAPHY} variant="h6" component="label">
            Stats:
          </Typography>
          <List>
            { stats.map((statsItem) => 
            <ListItem key={statsItem.name}>
              <ListItemText primary={statsItem.name} secondary={statsItem.value}/>
            </ListItem>
            )}
          </List>
        </StatsStyled>
      </InfoWrapperStyled>
    </ContainerStyled>
  )
}

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacer/2);
  gap: 2rem;

  h2 {
    margin: 2rem 0;
  }
`

const InfoWrapperStyled = styled.section`
  align-self: flex-start;
`

const StatsStyled = styled.section`
  display: flex;
  gap: 1rem;
`

const NameContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`
