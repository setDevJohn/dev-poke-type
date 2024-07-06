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
    background-color: #dde0ff;
    border-radius: 20px;
    width: 82%;
    max-width: 400px;
    height: 82svh;
`;

const BackgroundFocus = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #0007;
    width: 100%;
    height: 100%;
`;

const Icon = styled.img`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
`;

export {
  Icon,
  ModalContent,
  BackgroundFocus,
  RelativeContainer,
};
