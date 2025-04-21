import {
  HistoryStatusBodyBox,
  HistoryTriangle,
} from '../../../../styles/customerDetailHistory';
import HistoryTicket from './CustomerDetailHistoryTicket';
import HistoryCounseling from './CustomerDetailHistoryCounseling';
import HistoryPurchased from './CustomerDetailHistoryPurchased';

type HistoryBodyType = {
  open: boolean
}

const HistoryBody = ({open}: HistoryBodyType) => {
  return (
    <>
      <HistoryStatusBodyBox $open={open}>
        <HistoryTriangle>
          <img src="/svg/icon_triangle.svg" alt="" style={{ width: '6.18rem', height: '0.75rem' }} />
        </HistoryTriangle>
        <HistoryTicket />
        <HistoryCounseling />
        <HistoryPurchased />
      </HistoryStatusBodyBox>
    </>
  );
};

export default HistoryBody;
