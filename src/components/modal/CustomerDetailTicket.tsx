import {
  CustomerTicketContainer,
  CustomerTicketListContainer,
  CustomerTicketListItemBox,
  CustomerTicketListItem,
  CustomerTicketListItemBoxExpired,
} from '../../styles/customerDetailTicket';
import TicketDetail from './modalItem/ticket/CustomerDetailTicketDetail';
import TicketDetailExpired from './modalItem/ticket/CustomerDetailTicketDetailExpired';
import TicketUsage from './modalItem/ticket/CustomerDetailTicketUsage';
import TicketUsageExpired from './modalItem/ticket/CustomerDetailTicketUsageExpired';

type TicketDataType = {
  id: string;
  name: string;
};

type NumberOfTimesType = {
  id: string;
  created_at: string;
  updated_at: string;
};

const CustomerDetailTicket = () => {
  return (
    <CustomerTicketContainer>
      <CustomerTicketListContainer>
        <CustomerTicketListItemBox>
          <CustomerTicketListItem>
            <TicketDetail />
            <TicketUsage />
          </CustomerTicketListItem>
        </CustomerTicketListItemBox>
        {/* この下は期限切れ用 */}
        <CustomerTicketListItemBoxExpired>
          <CustomerTicketListItem>
            <TicketDetailExpired />
            <TicketUsageExpired />
          </CustomerTicketListItem>
        </CustomerTicketListItemBoxExpired>

      </CustomerTicketListContainer>
    </CustomerTicketContainer>
  );
};

export default CustomerDetailTicket;
