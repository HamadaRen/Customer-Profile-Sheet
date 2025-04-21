import styled from "styled-components";

export const ModalGrayContainer = styled.div<{ $showModal: boolean }>`
  position: fixed;
  bottom: 0;
  display: ${(props) => (props.$showModal ? '' : 'none')};
  width: 100%;
  height: calc(100vh - 5.125rem);
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #000;
  opacity: 0.4;
  box-shadow: -9px 0px 9.1px 0px rgba(125, 125, 125, 0.25);
  z-index: 10;
`;

export const CustomerInformationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 5px;
  background: #f9f5f1;
`;

export const CustomerDetailFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.75rem;
  padding: 0.8rem 0;
  gap: 1.875rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(86, 80, 73, 0.48);
  backdrop-filter: blur(2px);
`;

export const CustomerDetailPrinting = styled.div`
  display: flex;
  padding: 0.3rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--Text-, #fff);
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%), #146f9d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-, #fff);
  font-family: Inter;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.2rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ModalContainer = styled.div<{
  $animation: 'open' | 'close';
}>`
  display: flex;
  height: calc(100vh - 5.125rem);
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #665e4d;
  box-shadow: -9px 0px 9.1px 0px rgba(125, 125, 125, 0.25);
  z-index: 20;

  position: absolute;
  right: ${(props) => (props.$animation === 'open' ? '0' : '-2rem')};

  white-space: nowrap;
  overflow: hidden;

  @keyframes openModalContainer {
    0% {
      width: 0;
      min-width: 0;
    }
    100% {
      width: 40vw;
    }
  }

  @keyframes closeModalContainer {
    0% {
      width: 40vw;
    }
    100% {
      width: 0;
      min-width: 0;
    }
  }

  animation: ${(props) => (props.$animation === 'open' ? 'openModalContainer' : 'closeModalContainer')} 0.5s forwards;
  transition: all 0.5s;
`;

