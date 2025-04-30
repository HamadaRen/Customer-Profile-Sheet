import styled from "styled-components";

export const CustomerId = styled.div<{ $selected?: boolean; index: number }>`
  display: flex;
  height: calc(100% - 1px);
  justify-content: center;
  align-items: center;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected, index }) => ($selected ? '#c0c6c9' : index % 2 === 0 ? '#f3f0ec' : '#EEE6DF')};
  color: inherit;
  padding: 0 0 0 0.3rem;
  border-bottom: 1px solid #b0a396;
`;

export const ListHeaderCustomerName = styled.div<{ $selected?: boolean; index: number }>`
  display: flex;
  height: calc(100% - 1px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${({ $selected, index }) => ($selected ? '#c0c6c9' : index % 2 === 0 ? '#f3f0ec' : '#EEE6DF')};
  border-bottom: 1px solid #b0a396;
  padding: 0 1rem;
`;

export const ListHeaderContact = styled.div<{ $selected?: boolean; index: number }>`
  display: flex;
  height: calc(100% - 1px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $selected, index }) => ($selected ? '#c0c6c9' : index % 2 === 0 ? '#f3f0ec' : '#EEE6DF')};
  border-bottom: 1px solid #b0a396;
  padding: 0 1.8rem;
`;

export const Tel = styled.div`
  display: flex;
  padding: 0.1rem 0 0.1rem 2.5rem;
  align-items: center;
  gap: 0.5rem;
  color: var(--main-, #565249);
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ContactButton = styled.div`
  display: flex;
  width: 6.5rem;
  height: 1.3rem;
  padding: 0 1.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 10px;
  border: 1px solid var(--orange-, #ed7100);
  background: var(--orange-, #fdeddf);
  color: var(--orange-, #ed7100);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 1.4rem;
  /* margin-bottom: 0.4rem; */
  cursor: pointer;
`;

export const Ticket = styled.div<{ $selected?: boolean; index: number }>`
  display: flex;
  height: calc(100% - 1px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $selected, index }) => ($selected ? '#c0c6c9' : index % 2 === 0 ? '#f3f0ec' : '#EEE6DF')};
  border-bottom: 1px solid #b0a396;
  padding: 0 1.9rem;
`;

export const TicketName = styled.div`
  display: flex;
  padding: 0.1rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
`;
export const TicketTime = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2rem;
`;
export const TicketKinds = styled.div`
  display: flex;
  padding: 0.1rem;
  padding-left: 0.5rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2rem;
`;

export const TicketKindsTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--main-, #5d8b00);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 0.5rem;
`;

export const TicketButton = styled.div`
  display: flex;
  width: 6.5rem;
  height: 1.3rem;
  padding: 0 1.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 10px;
  border: 1px solid var(--orange-, #5d8b00);
  background: var(--orange-, #e9edda);
  color: var(--orange-, #5d8b00);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 1.4rem;
  margin-top: 0.2rem;
  cursor: pointer;
`;

export const Visitors = styled.div<{ $selected?: boolean; index: number }>`
  display: flex;
  height: calc(100% - 1px);
  justify-content: center;
  align-items: center;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected, index }) => ($selected ? '#c0c6c9' : index % 2 === 0 ? '#f3f0ec' : '#EEE6DF')};
  border-bottom: 1px solid #b0a396;
`;

export const Remarks = styled.div<{ $selected?: boolean; index: number }>`
  display: flex;
  height: calc(100% - 1px);
  padding: 0 1rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected, index }) => ($selected ? '#c0c6c9' : index % 2 === 0 ? '#f3f0ec' : '#EEE6DF')};
  border-bottom: 1px solid #b0a396;
`;

export const GridContainer = styled.div<{ $listColor?: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: 7.3% 7.3% 12.2% 12.2% 6.7% 7.3% 7.3% 7.3% 7.3% 1fr;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #b0a396;
  overflow-y: scroll;
`;