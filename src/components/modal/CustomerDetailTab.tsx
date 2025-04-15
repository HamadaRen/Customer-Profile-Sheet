import { Box, Tabs, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const CustomerDetailTab = () => {
  const [selected, setSelected] = useState<'customerInformation' | 'questionnaire' | 'history' | 'consent' | 'ticket'>(
    'customerInformation'
  );

  return (
    <CustomerDetailHeaderContainer>
      <CustomerDetailHeaderTab
        $selected={selected === 'customerInformation'}
        onClick={() => setSelected('customerInformation')}
      >
        顧客情報
      </CustomerDetailHeaderTab>
      <CustomerDetailHeaderTab
        $selected={selected === 'questionnaire'}
        onClick={() => setSelected('questionnaire')}
      >
        問診表
      </CustomerDetailHeaderTab>
      <CustomerDetailHeaderTab
        $selected={selected === 'history'}
        onClick={() => setSelected('history')}
      >
        来店・施術履歴
      </CustomerDetailHeaderTab>
      <CustomerDetailHeaderTab
        $selected={selected === 'consent'}
        onClick={() => setSelected('consent')}
      >
        同意書
      </CustomerDetailHeaderTab>
      <CustomerDetailHeaderTab
        $selected={selected === 'ticket'}
        onClick={() => setSelected('ticket')}
      >
        チケット情報
      </CustomerDetailHeaderTab>
    </CustomerDetailHeaderContainer>
  );
};

const CustomerDetailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 1px solid #b0a396;
  background: #f3f0ec;
  box-shadow: 0px 4px 10px 0px #ddcfc2;
  position: relative;
`;

const CustomerDetailHeaderTab = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 3rem;
  padding: 0rem 1.25rem 0rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? '#e9edda' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#5d8b00' : '#656565')};
  border-bottom: ${({ $selected }) => ($selected ? '2px solid #5d8b00' : 'transparent')};
`;


export default CustomerDetailTab;
