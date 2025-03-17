import styled from "styled-components";
import { COLORS } from "./color";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 3.2rem 1fr;
  overflow: hidden;
`;

export const SHeader = styled.div`
  width: 100%;
  height: 3.2rem;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  background: ${COLORS.OFF_WHITE};
  box-shadow: 0px 4px 4px 0px rgba(152, 152, 152, 0.25);
  color: #656565;
  font-weight: 700;
  font-size: 1.2rem;
  z-index: 10;
`;

export const SBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const RightContainer = styled.div<{ $visibleSidebar: boolean }>`
  width: ${({ $visibleSidebar }) =>
    $visibleSidebar ? "calc(100% - 13rem)" : "100%"};
  transition: width 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
