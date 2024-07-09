import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  gap: 5px;
  padding: 7px;
  border-radius: 10px;
  background: #000000bf;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h2`
  font-size: 16px;
  color: ${(props) => props.$color};
`;

export {
  Icon,
  Title,
  CardContainer,
};
