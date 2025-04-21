import styled from "styled-components";

export const CustomerDetailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 1px solid #b0a396;
  background: #f3f0ec;
  box-shadow: 0px 4px 10px 0px #ddcfc2;
  position: relative;
`;

export const CustomerDetailHeaderTab = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 1.7rem;
  padding: 0rem 1.25rem 0rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? '#e9edda' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#5d8b00' : '#656565')};
  border-bottom: ${({ $selected }) => ($selected ? '2px solid #5d8b00' : 'transparent')};
`;