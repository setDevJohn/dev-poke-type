/* eslint-disable react/prop-types */
import {
  Icon,
  Title,
  CardContainer,
} from './styles';

function TypeCard({ type, handleClick }) {
  const {
    name,
    color,
    image,
  } = type;

  return (
    <CardContainer onClick={ handleClick }>
      <Title $color={ color }>
        {name}
      </Title>

      <Icon src={ image } alt={ `Ícone-${type}` } />
    </CardContainer>
  );
}

export { TypeCard };
