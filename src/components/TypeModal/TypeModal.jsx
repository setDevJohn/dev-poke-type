import crossIcon from '../../assets/icons/cross.svg';
import {
  Icon,
  ModalContent,
  BackgroundFocus,
  RelativeContainer,
} from './styles';

function TypeModal({ disable }) {
  return (
    <RelativeContainer>
      <ModalContent>
        <Icon
          alt="cross-icon"
          src={ crossIcon }
          onClick={ disable }
        />
      </ModalContent>

      <BackgroundFocus onClick={ disable } />
    </RelativeContainer>
  );
}

export { TypeModal };
