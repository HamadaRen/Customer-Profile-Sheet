import React from 'react';
import styled from 'styled-components';
import CustomerDetailHeader from '../header/CustomerDetailHeader';
import { CustomerDetail, CustomerInformationContainer, ModalContainer } from '../../styles/application';
import CustomerDetailTab from './CustomerDetailTab';

const CustomerDetailModal = () => {
  return (
    <>
      <ModalContainer>
          <CustomerDetailHeader />
          <CustomerInformationContainer>
            <CustomerDetailTab />
          </CustomerInformationContainer>
      </ModalContainer>
    </>
  );
};

export default CustomerDetailModal;
