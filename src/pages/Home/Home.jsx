import { useState } from 'react';
import { types } from '../../objects/types';
import { TypeCard } from '../../components/TypeCard/TypeCard';
import { TypeModal } from '../../components/TypeModal/TypeModal';
import {
  TypeList,
  Container,
} from './styles';

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleSelectType = (type) => {
    setShowModal(true);
  };

  return (
    <Container>
      <TypeList>
        {types.map((type, i) => (
          <TypeCard
            key={ i }
            type={ type }
            handleClick={ () => handleSelectType(type) }
          />
        ))}
      </TypeList>

      {showModal && (
        <TypeModal
          disable={ () => setShowModal(false) }
        />
      )}
    </Container>
  );
}

export { HomePage };
