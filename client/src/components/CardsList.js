import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CardItem } from './CardItem/CardItem';

const CardsListContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  gap: 3rem;
`;

export const CardsList = ({ items }) => {
  return (
    <CardsListContainer>
      {items.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </CardsListContainer>
  )
}

CardsList.propTypes = {
  items: PropTypes.array.isRequired
}