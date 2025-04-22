import {
  CustomerTicketBodyDetailBox,
  CustomerTicketBodyDetailTitle,
  CustomerTicketDetail,
} from '../../../../styles/customerDetailTicket';

const TicketDetailExpired = () => {
  return (
    <CustomerTicketBodyDetailBox>
      <CustomerTicketBodyDetailTitle style={{color:'#A29B93'}}>
        <img src="/svg/icon_ticket_gray.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
        ララピール体験{'5回'}券
      </CustomerTicketBodyDetailTitle>
      <CustomerTicketDetail style={{color: '#A29B93'}}>
        <div>使用回数：</div>
        <div style={{ display: 'flex' }}>
          {'2'}
          <div style={{ fontWeight: 400 }}>回</div>
        </div>
      </CustomerTicketDetail>
      <CustomerTicketDetail style={{ gap: '2rem', color: '#A29B93' }}>
        <div>最終利用日：</div>
        <div style={{ fontWeight: 400 }}>{'2024/12/11'}</div>
      </CustomerTicketDetail>
      <CustomerTicketDetail style={{ gap: '1.1rem', color: '#A29B93' }}>
        <div>使用可能期間：</div>
        <div style={{ fontWeight: 400 }}>
          {'2024/12/10'}~{'2025/4/10'}
        </div>
      </CustomerTicketDetail>
    </CustomerTicketBodyDetailBox>
  )
}

export default TicketDetailExpired
