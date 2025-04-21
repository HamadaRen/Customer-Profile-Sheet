import {
  CustomerTicketBodyDetailBox,
  CustomerTicketBodyDetailTitle,
  CustomerTicketDetail,
} from '../../../../styles/customerDetailTicket';

const TicketDetail = () => {
  return (
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
  );
};

export default TicketDetail;
