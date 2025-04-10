import styled from 'styled-components';
import { COLORS } from './color';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 3.2rem 1fr;
  overflow: hidden;
`;

export const SHeader = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  color: #dccec1;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  background: ${COLORS.MAIN_HEADER_BROWN};
  box-shadow: 0px 4px 15px 0px rgba(53, 50, 43, 0.22);
  gap: 0.5rem;
  z-index: 10;
`;

export const SBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const RightContainer = styled.div<{ $visibleSidebar: boolean }>`
  width: ${({ $visibleSidebar }) => ($visibleSidebar ? 'calc(100% - 13rem)' : '100%')};
  transition: width 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
