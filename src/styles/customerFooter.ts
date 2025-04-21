import styled from "styled-components"

export const CustomerFoot = styled.div`
  background: #ddd7d1;
  width: 100%;
  height: 3.5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
`

export const CustomerFootPosition = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem 0.625rem 1.25rem;
  align-items: flex-end;
  gap: 0.625rem;
  border-radius: 10px;
  background-blend-mode: multiply;
`

export const CustomerFooterButtonLine = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  gap: 0.4375rem;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
`;

export const CustomerFooterButton = styled.div`
  display: flex;
  width: 0.5rem;
  height: 1rem;
  padding: 0.375rem 0.6875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #f3e6da;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const CustomerFooterButtonNumber = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 0.5rem;
  height: 1rem;
  padding: 0.375rem 0.6875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3px;
  background: #f3e6da;
  font-size: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  cursor: pointer;
  background-color: ${({ $selected }) => ($selected ? '#756c62' : 'f3e6da')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#756c62')};
  &:hover {
    opacity: 0.5;
  }
`;