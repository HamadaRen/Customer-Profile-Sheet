import { useState } from 'react';
import { HistoryTabContainer, HistoryListItemBox, HistoryTriangle } from '../../styles/customerDetailHistory';
import HistoryBody from './modalItem/history/CustomerDetailHistoryBody';
import HistoryHeader from './modalItem/history/CustomerDetailHistoryHeader';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

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
  };
  return (
    <HistoryTabContainer>
      <HistoryListItemBox>
        <Accordion style={{ width: '100%'}}>
          <AccordionSummary style={{borderBottom: '1px solid #000', padding: '0 0 0 0.5rem'}} onClick={handleClickArrow}>
            <HistoryHeader open={open} />
            {/* 来店履歴のヘッダーのデザインで白い三角形をつけるがまだできていない部分のコメントアウト */}
            {/* <HistoryTriangle>
              <img src="/svg/icon_triangle.svg" alt="" style={{ width: '6.18rem', height: '0.75rem' }} />
            </HistoryTriangle> */}
          </AccordionSummary>
          <AccordionDetails style={{padding: '0.7rem 0.2rem 0.2rem 0.2rem'}}>
            <HistoryBody />
          </AccordionDetails>
        </Accordion>
      </HistoryListItemBox>
    </HistoryTabContainer>
  );
};

export default CustomerDetailHistory;
