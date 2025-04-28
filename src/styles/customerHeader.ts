import styled from "styled-components";

export const AddButton = styled.div`
  background: #ddd7d1;
`;

export const SearchCustomer = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem 0.625rem 1.25rem;
  align-items: flex-end;
  gap: 0.625rem;
  margin: 0.8rem 26.125rem 0.8rem 0.8rem;
  border-radius: 10px;
  background: rgba(115, 115, 115, 0.7);
  background-blend-mode: multiply;
`;

export const HeaderCustomerId = styled.div`
  display: flex;
  width: 13rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
`;

export const CustomerIdSearchInput = styled.input`
  display: flex;
  height: 1.25rem;
  padding: 5px 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #656565;
  background: #fff;
`;

export const SearchButton = styled.div`
  display: flex;
  width: 7rem;
  height: 1.8rem;
  padding: 0.25rem 2.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%),
    linear-gradient(90deg, #454137 0%, #aba188 100%);
  box-shadow: 6px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-, #fff);
  text-align: center;
  text-shadow: 2px 2px 3px rgba(117, 71, 17, 0.49);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.9px;
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const AdvancedSearch = styled.div`
  display: flex;
  padding: 0.1rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;

export const BottomExpansion = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    filter: brightness(50%);
    box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 1);
  }
`;