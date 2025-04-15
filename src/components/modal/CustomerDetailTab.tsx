import { Box, Tabs, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomerDetailHeaderContainer, CustomerDetailHeaderTab } from '../../styles/application';

type CustomerDetailTabType = {
  selected: "customerInformation" | "questionnaire" | "history" | "consent" | "ticket";
  setSelected: React.Dispatch<React.SetStateAction<"customerInformation" | "questionnaire" | "history" | "consent" | "ticket">>
}

const CustomerDetailTab = ({selected, setSelected}: CustomerDetailTabType) => {

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


export default CustomerDetailTab;
