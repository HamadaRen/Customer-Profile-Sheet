import React, { useState } from 'react';
import styled from 'styled-components';
import CustomerDetailHeader from '../header/CustomerDetailHeader';
import { CustomerDetail, CustomerInformationContainer, ModalContainer } from '../../styles/application';
import CustomerDetailTab from './CustomerDetailTab';
import CustomerDetailInformation from './CustomerDetailInformation';
import CustomerDetailQuestionnaire from './CustomerDetailQuestionnaire';
import CustomerDetailHistory from './CustomerDetailHistory';
import CustomerDetailConsent from './CustomerDetailConsent';
import CustomerDetailTicket from './CustomerDetailTicket';
import CustomerDetailModalFooter from '../footer/CustomerDetailModalFooter';

type CustomerDetailModalType = {
  showModal: boolean;
};

const CustomerDetailModal = ({ showModal }: CustomerDetailModalType) => {
  const [selected, setSelected] = useState<'customerInformation' | 'questionnaire' | 'history' | 'consent' | 'ticket'>(
    'customerInformation'
  );

  if (!showModal) {
    return <></>;
  }

  let selectedData;
  if (selected === 'customerInformation') {
    selectedData = <CustomerDetailInformation />;
  } else if (selected === 'questionnaire') {
    selectedData = <CustomerDetailQuestionnaire />;
  } else if (selected === 'history') {
    selectedData = <CustomerDetailHistory />;
  } else if (selected === 'consent') {
    selectedData = <CustomerDetailConsent />;
  } else if (selected === 'ticket') {
    selectedData = <CustomerDetailTicket />;
  }

  return (
    <>
      <ModalContainer>
        <CustomerDetailHeader />
        <CustomerInformationContainer>
          <CustomerDetailTab selected={selected} setSelected={setSelected} />
          <div>{selectedData}</div>
        </CustomerInformationContainer>
        <CustomerDetailModalFooter />
      </ModalContainer>
    </>
  );
};

export default CustomerDetailModal;
