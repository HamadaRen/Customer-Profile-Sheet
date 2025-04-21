import styled from "styled-components";

export const CustomerInformationBodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #b2b89e;
  padding-top: 0.5rem;
`;

export const CustomerInformationSubHeaderBox = styled.div`
  flex-direction: column;
  align-self: stretch;
`;

export const CustomerInformationEditButtonBox = styled.div`
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
`;

export const CustomerInformationEditButton = styled.div`
  display: flex;
  padding: 0.3rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 5px;
  background: var(--main-, #747d62);
  color: var(--Text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CustomerBasicInformationSubHeaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  color: #656565;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.9px;
  align-self: stretch;
`;

export const CustomerBasicInformationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.08rem;
`;
export const CustomerBasicInformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding-right: 4rem;
  gap: 5rem;
`;
export const CustomerDetailItemBox = styled.div`
  padding-left: 1rem;
  flex: 1 0 0;
`;
export const CustomerDetailItemTitle = styled.div`
  padding: 0px 0.25rem;
  color: #909090;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CustomerDetailItem = styled.div`
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  background: #ede5df;
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.8rem;
`;
export const CustomerDetailItemLong = styled.div`
  display: flex;
  width: 100%;
  padding: 0.4rem 0.4rem;
  align-items: center;
  align-self: stretch;
  border-radius: 3px;
  background: #ede5df;
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.8rem;
`;

export const CustomerDetailItemTitleRight = styled.div`
  display: flex;
  padding: 0px 0.25rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  color: #909090;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CustomerDetailItemRight = styled.div`
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  background: #ede5df;
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerDetailSharedSubHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0px;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  color: #656565;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.9px;
`;

export const CustomerDetailSharedFixedContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 3rem;
`;

export const CustomerDetailFixedMemoBox = styled.div`
  display: flex;
  width: calc(100% - 6rem);
  padding: 0.3rem 1rem 0.5rem 0.8rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid var(--Green-, #5d8b00);
  background: #fff;
  margin-bottom: 0.5rem;
`;

export const CustomerDetailFixedMemoDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  color: var(--Green-, #5d8b00);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerDetailFixedMemoBodyBox = styled.div`
  display: flex;
  padding-left: 0.9rem;
  align-items: flex-end;
  gap: 0.625rem;
  align-self: stretch;
`;

export const CustomerDetailFixedMemoBody = styled.div`
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerDetailFixedMemoPerson = styled.div`
  width: 13em;
  height: 1.1rem;
  display: flex;
  font-size: 0.8rem;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  left: 0.8rem;
  gap: 0.2rem;
`;

export const CustomerDetailDateMemoBox = styled.div`
  display: flex;
  width: calc(100% - 6rem);
  padding: 0.3rem 1rem 0.5rem 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 5px;
  border: 0.5px solid var(--text-30, #979797);
  background: #fff;
`;

export const CustomerDetailMemoTime = styled.div`
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const QuestionnaireContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;