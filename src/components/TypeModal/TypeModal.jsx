/* eslint-disable react/prop-types */
import crossIcon from '../../assets/icons/cross.svg';
import {
  Icon,
  Item,
  Title,
  TypeIcon,
  TypeCard,
  TypeName,
  TypeList,
  ModalContent,
  CardContainer,
  BackgroundFocus,
  RelativeContainer,
} from './styles';

function TypeModal({ type, disable }) {
  const {
    name,
    color,
    strengths,
    weaknesses,
    immunities,
  } = type;

  return (
    <RelativeContainer>
      <ModalContent>
        <Icon
          alt="cross-icon"
          src={ crossIcon }
          onClick={ disable }
        />

        <Title color={ color }>{name}</Title>

        <CardContainer>
          {!!strengths.length && (
            <TypeCard>
              <TypeName>Strengths</TypeName>
              <TypeList>
                {strengths?.map((strength) => (
                  <Item key={ strength }>
                    <TypeIcon src={ strength } alt="type-ícon" />
                  </Item>
                ))}
              </TypeList>
            </TypeCard>
          )}

          {!!weaknesses.length && (
            <TypeCard>
              <TypeName>Weaknesses</TypeName>
              <TypeList>
                {weaknesses?.map((weakness) => (
                  <Item key={ weakness }>
                    <TypeIcon src={ weakness } alt="type-ícon" />
                  </Item>
                ))}
              </TypeList>
            </TypeCard>
          )}

          {!!immunities.length && (
            <TypeCard>
              <TypeName>Immunities</TypeName>
              <TypeList>
                {immunities?.map((immunity) => (
                  <Item key={ immunity }>
                    <TypeIcon src={ immunity } alt="type-ícon" />
                  </Item>
                ))}
              </TypeList>
            </TypeCard>
          )}
        </CardContainer>
      </ModalContent>

      <BackgroundFocus onClick={ disable } />
    </RelativeContainer>
  );
}

export { TypeModal };
