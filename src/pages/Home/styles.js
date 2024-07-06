import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 440px;
    height: 100svh;
    margin: 0 auto;
`;

const TypeList = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px 0;
    gap: 15px 10px;
    flex-wrap: wrap;
    flex: 1;
    overflow: auto;
    width: 100%;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        background: #888;
    }
    &::-webkit-scrollbar-thumb {
        background: #7e6cae;
        border-radius: 4px;
    }
`;

export {
  TypeList,
  Container,
};
