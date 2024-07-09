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
  const [typeSelected, setTypeSelected] = useState({});

  const handleSelectType = (type) => {
    setShowModal(true);
    setTypeSelected(type);
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
          type={ typeSelected }
          disable={ () => setShowModal(false) }
        />
      )}
    </Container>
  );
}

export { HomePage };
