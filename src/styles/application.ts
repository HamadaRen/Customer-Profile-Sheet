import styled from 'styled-components';

export const SButton = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#dcdcdc' : '#dcdcdc')};
  color: inherit;
`;

export const ButtonHoverThinner = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
