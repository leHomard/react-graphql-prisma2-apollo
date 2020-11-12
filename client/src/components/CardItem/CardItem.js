import { memo } from 'react'
import { Card } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  width: 280px;
  height: 280px;
  margin: 1rem;
`;

const StyledImg = styled.img`
  height: 220px;
  object-fit: cover;
`;


export const CardItem = memo(({ item }) => {
  return (
    <StyledCard
      key={item.id}
      hoverable
      cover={<StyledImg alt="cover" src={item?.cover} />}
    >
      <StyledCard.Meta
        style={{ display: 'flex', justifyContent: 'center' }}
        title={item?.stageName || item?.name || item?.title}
        description={item?.description} />
    </StyledCard>
  )
});

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
}