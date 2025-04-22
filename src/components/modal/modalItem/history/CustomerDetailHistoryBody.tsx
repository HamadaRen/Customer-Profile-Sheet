import {
  HistoryStatusBodyBox,
  HistoryTriangle,
} from '../../../../styles/customerDetailHistory';
import HistoryTicket from './CustomerDetailHistoryTicket';
import HistoryCounseling from './CustomerDetailHistoryCounseling';
import HistoryPurchased from './CustomerDetailHistoryPurchased';

const HistoryBody = () => {
  return (
    <>
      <HistoryStatusBodyBox>
        <HistoryTicket />
        <HistoryCounseling />
        <HistoryPurchased />
      </HistoryStatusBodyBox>
    </>
  );
};

export default HistoryBody;
