import { types } from '../../objects/types';
import { TypeCard } from '../../components/TypeCard/TypeCard';
import {
  TypeList,
  Container,
} from './styles';

function HomePage() {
  return (
    <Container>
      <TypeList>
        {types.map(({ name, image, color }) => (
          <TypeCard
            key={ name }
            type={ name }
            color={ color }
            image={ image }
          />
        ))}
      </TypeList>
    </Container>
  );
}

export { HomePage };
