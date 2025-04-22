import { CustomerTicketFooterBox, CustomerTicketFooter } from '../../../../styles/customerDetailTicket';

const TicketUsageExpired = () => {
  return (
    <CustomerTicketFooterBox>
      <CustomerTicketFooter style={{border: '1px solid #656565', color: '#A29B93', backgroundColor: 'transparent'}}>
        <div>残り回数：</div>
        <div>3回</div>
      </CustomerTicketFooter>
      <CustomerTicketFooter style={{border: '1px solid #656565', color: '#A29B93', backgroundColor: 'transparent'}}>
        <div>使用可能期限まで：</div>
        <div>　-</div>
      </CustomerTicketFooter>
    </CustomerTicketFooterBox>
  )
}

export default TicketUsageExpired
