import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useRouter } from 'next/router'
import { Picture } from './picture'

export interface ICardItem {
  id: number
  name: string
  image: string
}

export const CardItem = ({id, name, image}: ICardItem) => {
  const router = useRouter()

  function showCardDetails() {
    router.push(`/${id}`)
  }

  return (
    <CardStyled variant="outlined">
      <CardContentStyled>
        <ButtonStyled 
          variant="outlined" 
          onClick={showCardDetails}>
            {name}
        </ButtonStyled>
        <Picture image={image}/>
      </CardContentStyled>
    </CardStyled>
  )
}

const CardStyled = styled(Card)`
  border: none;

  :hover {
    scale: 1.2;
  }
`

const ButtonStyled = styled(Button)`
  color: var(--brown);
  border-color: var(--brown);
  :hover {
    border-color: var(--brown);
  }
`

const CardContentStyled = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`
