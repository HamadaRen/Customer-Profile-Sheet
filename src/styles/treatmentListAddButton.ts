import styled from "styled-components";

export const TreatmentAddButton = styled.div`
position: relative;
  display: flex;
  width: 7rem;
  height: 3rem;
  padding: 0.25rem 2.6875rem;
  justify-content: center;
  align-items: center;
  right: 50rem;
  border-radius: 8px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%),
    linear-gradient(90deg, #454137 0%, #aba188 100%);
  box-shadow: 6px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-, #fff);
  text-shadow: 2px 2px 3px rgba(117, 71, 17, 0.49);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.9px;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;