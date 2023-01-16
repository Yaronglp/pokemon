import styled from '@emotion/styled'
import { CardItem, ICardItem } from './card'

export interface IList {
  cards: ICardItem[]
}

const CardList = ({cards}: IList) => {
  return (
    <CardListStyled>
      {
        cards.map(card => (
          <CardItem key={card.id} 
                    id={card.id}
                    name={card.name}
                    image={card.image}/>
        ))
      }
    </CardListStyled>
  )
}

export default CardList

const CardListStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 2rem;
  row-gap: 4rem;
`
