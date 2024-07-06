import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  background: #0005;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${(props) => props.$color};
`;

export {
  Icon,
  Title,
  CardContainer,
};
