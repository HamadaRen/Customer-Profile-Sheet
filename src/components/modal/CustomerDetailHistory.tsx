import { useState } from 'react';
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
  const [open, setOpen] = useState<boolean>(false);

  const handleClickArrow = () => {
    setOpen((open) => !open);
  }
  return (
    <HistoryTabContainer>
      <HistoryListItemBox>
        <HistoryHeader open={open} handleClickArrow={handleClickArrow} />
        <HistoryBody open={open} />
      </HistoryListItemBox>
    </HistoryTabContainer>
  );
};

export default CustomerDetailHistory;
