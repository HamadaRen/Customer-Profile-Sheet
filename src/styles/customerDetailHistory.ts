import styled from "styled-components";

export const HistoryTabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const HistoryListItemBox = styled.div`
  display: flex;
  width: calc(100% - 4rem);
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--main-, #a29b93);
  box-shadow: 0px 4px 10px 0px rgba(99, 118, 61, 0.25);
`;

export const HistoryListItemHeaderBox = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  border-radius: 5px;
`;

export const HistoryVisitInformation = styled.div`
  display: flex;
  padding: 0px 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 10px;
  border: 1px solid #0077fa;
  background: #eaf4ff;
  color: #0077fa;
  font-family: 'Noto Sans JP';
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;

export const HistoryVisitDate = styled.div`
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const HistoryVisitTime = styled.div`
  color: var(--main-, #a29b93);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HistoryStatus = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const HistoryTreatmentTag = styled.div`
  display: flex;
  padding: 0.05rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 3px;
  border: 1px solid var(--ground-Smart-HR_Deep, #04a9af);
  background: #f1feff;
  color: var(--ground-Smart-HR_Deep, #04a9af);
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const HistoryCounselingTag = styled.div`
  display: flex;
  padding: 0.05rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 3px;
  border: 1px solid var(--orange-, #ed7100);
  background: var(--orange-, #fdeddf);
  color: var(--orange-, #ed7100);
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const HistoryPurchasedProductsTag = styled.div`
  display: flex;
  padding: 0.05rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 3px;
  border: 1px solid var(--Colors-Pink, #ff2d55);
  background: #ffeaee;
  color: var(--Colors-Pink, var(--Colors-Pink, #ff2d55));
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HistoryTriangle = styled.div`
  position: relative;
  bottom: 8.6%;
  right: 6%;
`;

export const HistoryStatusBodyBox = styled.div`
  display: flex;
  width: calc(100% - 1rem);
  padding: 0 0.5rem 0.5rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  border: 1px solid var(--main-, #a29b93);
  border-radius: 3px;
  background: #fff;
`;

export const HistoryStatusBody = styled.div`
  display: flex;
  padding: 0.23rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  border: 1px solid var(--text-10, #d6d6d6);
  background: #f9fbeb;
`;

export const HistoryStatusBodyTitle = styled.div`
  display: flex;
  width: 7.3rem;
  align-items: center;
  gap: 0.3rem;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HistoryStatusBodyContent = styled.div`
  display: flex;
  padding: 0px 0.875rem;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  color: #656565;
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;