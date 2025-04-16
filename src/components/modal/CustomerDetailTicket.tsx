import React from 'react';
import styled from 'styled-components';

const CustomerDetailTicket = () => {
  return (
    <CustomerTicketContainer>
      <CustomerTicketListContainer>
        <CustomerTicketListItemBox>
          <CustomerTicketListItem>
            <CustomerTicketBodyDetailBox>
              <CustomerTicketBodyDetailTitle>
                <img src="/svg/icon_ticket_green.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
                ララピール体験{'5回'}券
              </CustomerTicketBodyDetailTitle>
              <CustomerTicketDetail>
                <div>使用回数：</div>
                <div style={{ display: 'flex' }}>
                  {'2'}
                  <div style={{ fontWeight: 400 }}>回</div>
                </div>
              </CustomerTicketDetail>
              <CustomerTicketDetail style={{ gap: '2rem' }}>
                <div>最終利用日：</div>
                <div style={{ fontWeight: 400 }}>{'2024/12/11'}</div>
              </CustomerTicketDetail>
              <CustomerTicketDetail style={{ gap: '1.1rem' }}>
                <div>使用可能期間：</div>
                <div style={{ fontWeight: 400 }}>
                  {'2024/12/10'}~{'2025/4/10'}
                </div>
              </CustomerTicketDetail>
            </CustomerTicketBodyDetailBox>
            <CustomerTicketFooterBox>
              <CustomerTicketFooter>
                <div>残り回数：</div>
                <div>3回</div>
              </CustomerTicketFooter>
              <CustomerTicketFooter>
                <div>使用可能期限まで：</div>
                <div>残り{'1'}カ月</div>
                <div style={{ display: 'flex' }}>
                  ※<div style={{ width: '8.6rem', color: '#FF2D3A', fontWeight: 400 }}>期限が近づいています</div>
                </div>
              </CustomerTicketFooter>
            </CustomerTicketFooterBox>
          </CustomerTicketListItem>
        </CustomerTicketListItemBox>
        <CustomerTicketListItemBox>
          <CustomerTicketListItem>
            <CustomerTicketBodyDetailBox>
              <CustomerTicketBodyDetailTitle>
                <img src="/svg/icon_ticket_green.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
                ララピール体験{'5回'}券
              </CustomerTicketBodyDetailTitle>
              <CustomerTicketDetail>
                <div>使用回数：</div>
                <div style={{ display: 'flex' }}>
                  {'2'}
                  <div style={{ fontWeight: 400 }}>回</div>
                </div>
              </CustomerTicketDetail>
              <CustomerTicketDetail style={{ gap: '2rem' }}>
                <div>最終利用日：</div>
                <div style={{ fontWeight: 400 }}>{'2024/12/11'}</div>
              </CustomerTicketDetail>
              <CustomerTicketDetail style={{ gap: '1.1rem' }}>
                <div>使用可能期間：</div>
                <div style={{ fontWeight: 400 }}>
                  {'2024/12/10'}~{'2025/4/10'}
                </div>
              </CustomerTicketDetail>
            </CustomerTicketBodyDetailBox>
            <CustomerTicketFooterBox>
              <CustomerTicketFooter>
                <div>残り回数：</div>
                <div>3回</div>
              </CustomerTicketFooter>
              <CustomerTicketFooter>
                <div>使用可能期限まで：</div>
                <div>残り{'1'}カ月</div>
                <div style={{ display: 'flex' }}>
                  ※<div style={{ width: '8.6rem', color: '#FF2D3A', fontWeight: 400 }}>期限が近づいています</div>
                </div>
              </CustomerTicketFooter>
            </CustomerTicketFooterBox>
          </CustomerTicketListItem>
        </CustomerTicketListItemBox>
      </CustomerTicketListContainer>
    </CustomerTicketContainer>
  );
};

const CustomerTicketContainer = styled.div`
  display: flex;
  height: 51.875rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.125rem;
  flex-shrink: 0;
  `;

const CustomerTicketListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  overflow-y: scroll;
`;

const CustomerTicketListItemBox = styled.div`
  display: flex;
  width: 31.5rem;
  padding: 0.5rem 1.06rem;
  align-items: flex-start;
  gap: 0.125rem;
  border-radius: 5px;
  border: 1px solid var(--text-10, #d6d6d6);
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(157, 159, 161, 0.25);
  margin: 0.5rem 0.2rem 0 0.4rem;
`;

const CustomerTicketListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;
`;

const CustomerTicketBodyDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
`;

const CustomerTicketBodyDetailTitle = styled.div`
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

const CustomerTicketDetail = styled.div`
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

const CustomerTicketFooterBox = styled.div`
  display: flex;
  padding: 0px 1.56rem;
  align-items: flex-end;
  gap: 1rem;
  align-self: stretch;
`;

const CustomerTicketFooter = styled.div`
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

export default CustomerDetailTicket;
