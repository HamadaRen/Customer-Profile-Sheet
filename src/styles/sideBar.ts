import styled from "styled-components";
import { COLORS } from "./color";

export const SidebarHeader = styled.div`
  display: flex;
  width: 11.25rem;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #dccec1;
  font-size: 1.125rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(220, 206, 193, 0);
  background-image: -webkit-linear-gradient(left, transparent, #dccec1 50%, #dccec1 50%, transparent);
  background-image: linear-gradient(to right, transparent, #dccec1 50%, #dccec1 50%, transparent);
  background-size: 10rem 0.08rem;
  background-position: bottom;
  background-repeat: no-repeat;
`;

//openとcloseをkeyにしてそれぞれの形を作成
export const StyledSideBar = styled.div<{ $animation: 'open' | 'close' }>`
  @keyframes open {
    0% {
      width: 0;
    }
    100% {
      width: 13rem;
    }
  }

  @keyframes close {
    0% {
      width: 13rem;
    }
    100% {
      width: 0;
    }
  }
  animation: ${({ $animation }) => ($animation === 'open' ? 'open' : 'close')} 0.3s forwards;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${COLORS.MAIN_SIDEBAR_BROWN};
  color: white;
  display: flex;
  width: 17.75rem;
  height: 100%;
  padding-top: 0.9375rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const StyledRow = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 1.5rem;
  padding: 0.5rem 0.625rem 0.5rem 1.875rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  text-decoration: dashed;
  font-size: 1.125rem;
  font-weight: 900;
  background-color: ${({ $selected }) => ($selected ? '#393b2e' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#c8d5ad' : '#DCCEC1')};
  border-left: ${({ $selected }) => ($selected ? '0.375rem solid #c8d5ad' : '0.375rem solid #393b2e')};
  &:hover {
    background-color: #393b2e;
  }
`;

export const StyledRowManagement = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 2.4rem;
  padding: 0 0.625rem 0 1.875rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  color: #dccec1;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: normal;
  text-decoration: dashed;
  background-color: ${({ $selected }) => ($selected ? '#393B2E' : 'transparent')};
  &:hover {
    background-color: #393b2e;
  }
`;