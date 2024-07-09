import styled from 'styled-components';

const RelativeContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100svh;
`;

const ModalContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: #1c1c1c;
    border-radius: 10px;
    width: 82%;
    max-width: 400px;
    min-height: 30svh;
    padding: 20px;
`;

const BackgroundFocus = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #0009;
    width: 100%;
    height: 100%;
`;

const Icon = styled.img`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 32px;
    height: 32px;
`;

const CardContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 22px;
  margin-bottom: 15px;
  color: ${({ color }) => color}
`;

const TypeCard = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
`;

const TypeName = styled.p`
  font-size: 16px;
  color: #cecccc;
`;

const TypeList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Item = styled.li`
`;

const TypeIcon = styled.img`
    width: 35px;
    height: 35px;
`;

export {
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
};
