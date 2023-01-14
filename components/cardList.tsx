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
  grid-template-columns: 33% 33% 33%;
  grid-gap: 2rem;
  row-gap: 8rem;
`
