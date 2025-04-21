import { CustomerTicketFooterBox, CustomerTicketFooter } from '../../../../styles/customerDetailTicket';

const TicketUsage = () => {
  return (
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
  );
};

export default TicketUsage;
