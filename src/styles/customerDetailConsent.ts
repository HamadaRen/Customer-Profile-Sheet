import styled from "styled-components";

export const CustomerConsentDisplayContainer = styled.div`
  display: flex;
  height: 16rem;
  padding: 0rem 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

export const CustomerConsentTitleBox = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomerConsentTitle = styled.div`
  display: flex;
  align-items: center;
  width: 20.5rem;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerConsentAttachedBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration-line: none;
`;

export const CustomerConsentContractDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: var(--Text-50, #656565);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerConsentContractDate = styled.div`
  display: flex;
  padding: 0.125rem 0.875rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3px;
  background: #e4dbd3;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerConsentDataContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  align-self: stretch;
`;

export const ConfirmationButton = styled.div`
  display: flex;
  width: 6rem;
  height: 1rem;
  padding: 0.375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 5px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%), #3982bd;
  border-radius: 5px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%), #3982bd;
  color: var(--Text-, #fff);
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    opacity: 0.7;
  }
`;

export const CustomerConsentListHeader = styled.div`
  display: flex;
  padding: 0rem 0.375rem 0rem 1.625rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 1px solid #d6d6d6;
  box-shadow: 0px 1px 4px 0px rgba(178, 178, 178, 0.18);
  color: var(--Text-80, #272727);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CustomerConsentListHeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CustomerConsentListItemContainer = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: calc(100% - 4rem);
  height: 3.5rem;
  padding: 0.3rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  background: ${({ $selected }) => ($selected ? '#EFF5D8' : 'transparent')};
  cursor: pointer;
`;
export const CustomerConsentListItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
  border-bottom: 1px solid #d6d6d6;
`;

export const CustomerConsentCheckBox = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  fill: rgba(255, 255, 255, 0.6);
  filter: drop-shadow(2px 2px 4px rgba(201, 201, 201, 0.5));
  backdrop-filter: blur(2.5px);
`;

export const CustomerConsentBodyBox = styled.div`
  display: flex;
  height: 4.5rem;
  padding-left: 0.93rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.93rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;