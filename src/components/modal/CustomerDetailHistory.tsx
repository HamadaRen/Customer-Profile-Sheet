import {
  HistoryTabContainer,
  HistoryListItemBox,
} from '../../styles/customerDetailHistory';
import HistoryBody from './modalItem/history/CustomerDetailHistoryBody';
import HistoryHeader from './modalItem/history/CustomerDetailHistoryHeader';

type HistoryType = {
  visitFlg: string;
  created_at: string;
  updated_at: string;
};

type TicketDataType = {
  id: string;
  name: string;
  counseling: string;
};

type MerchandiseType = {
  id: string;
  name: string;
};

const CustomerDetailHistory = () => {
  return (
    <HistoryTabContainer>
      <HistoryListItemBox>
        <HistoryHeader />
        <HistoryBody />
      </HistoryListItemBox>
    </HistoryTabContainer>
  );
};

export default CustomerDetailHistory;
