import {
  Icon,
  Title,
  CardContainer,
} from './styles';

function TypeCard({ type, image, color }) {
  return (
    <CardContainer>
      <Title $color={ color }>
        {type}
      </Title>

      <Icon src={ image } alt={ `Ícone-${type}` } />
    </CardContainer>
  );
}

export { TypeCard };
