import {
  CustomerTicketContainer,
  CustomerTicketListContainer,
  CustomerTicketListItemBox,
  CustomerTicketListItem,
} from '../../styles/customerDetailTicket';
import TicketDetail from './modalItem/ticket/CustomerDetailTicketDetail';
import TicketUsage from './modalItem/ticket/CustomerDetailTicketUsage';

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
      </CustomerTicketListContainer>
    </CustomerTicketContainer>
  );
};

export default CustomerDetailTicket;
