import styled from "styled-components"
import { COLORS } from "./color";

export const Department = styled.p`
  color: var(--main-, #DCCEC1);
text-align: right;
font-family: "Noto Sans JP";
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1.8px;
`
export const Administrator = styled.p`
color: var(--main-, #DCCEC1);
font-family: "Noto Sans JP";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 2.1px;
`

export const SHeader = styled.div`
  width: 100%;
  height: 3.125rem;
  position: relative;
  display: flex;
  align-items: center;
  color: #dccec1;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  background: ${COLORS.MAIN_HEADER_BROWN};
  box-shadow: 0px 4px 15px 0px rgba(53, 50, 43, 0.22);
  gap: 0.5rem;
  z-index: 10;
  white-space: nowrap;
`;

export const UserData = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  gap: 0.69rem;
  padding: 0 2rem;
`;