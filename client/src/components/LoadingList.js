import styled from 'styled-components';
import { Skeleton } from 'antd'


const CardsListContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  gap: 3rem;
`;

export const LoadingList = () => {
  return (
    <CardsListContainer>
      {Array.from(Array(16).keys()).map(item => (
        <Skeleton loading={true} active />
      ))}
    </CardsListContainer>
  )
}