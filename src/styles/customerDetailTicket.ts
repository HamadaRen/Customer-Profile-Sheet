import styled from "styled-components";

export const CustomerTicketContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 0.125rem;
  flex-shrink: 0;
  padding-top: 0.5rem;
`;

export const CustomerTicketListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1rem 0 1rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CustomerTicketListItemBox = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  padding: 0.5rem 1.06rem;
  align-items: flex-start;
  gap: 0.125rem;
  border-radius: 5px;
  border: 1px solid var(--text-10, #d6d6d6);
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(157, 159, 161, 0.25);
`;

export const CustomerTicketListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;
`;

export const CustomerTicketBodyDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
`;

export const CustomerTicketBodyDetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: var(--main-, #575850);
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerTicketDetail = styled.div`
  display: flex;
  padding: 0px 1.8rem;
  align-items: center;
  gap: 3rem;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerTicketFooterBox = styled.div`
  display: flex;
  padding: 0px 1.56rem;
  align-items: flex-end;
  gap: 1rem;
  align-self: stretch;
`;

export const CustomerTicketFooter = styled.div`
  display: flex;
  height: 1.5rem;
  padding: 0rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 5px;
  border: 1px solid var(--text-50, #656565);
  background: #f9fbef;
  box-shadow: 2px 2px 4px 0px rgba(204, 204, 204, 0.25);
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.68rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;