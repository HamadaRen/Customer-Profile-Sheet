import React from 'react';
import styled from 'styled-components';
import { CustomerTicketContainer, CustomerTicketListContainer, CustomerTicketListItemBox, CustomerTicketListItem, CustomerTicketBodyDetailBox, CustomerTicketBodyDetailTitle, CustomerTicketDetail, CustomerTicketFooterBox, CustomerTicketFooter } from '../../styles/application';

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


export default CustomerDetailTicket;
