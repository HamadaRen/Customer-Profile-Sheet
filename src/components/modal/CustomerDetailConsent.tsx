import { useState } from 'react';
import { CustomerConsentDisplayContainer, ConfirmationButton } from '../../styles/customerDetailConsent';
import ConsentTitle from './modalItem/consent/CustomerDetailConsentTitle';
import ConsentImage from './modalItem/consent/CustomerDetailConsentImage';
import ConsentList from './modalItem/consent/CustomerDetailConsentList';
import ConsentListItem from './modalItem/consent/CustomerDetailConsentListItem';

type ConcentDataType = {
  id: string;
  name: string;
  created_at: string;
};

type StaffDataType = {
  id: string;
  name: string;
};

const CustomerDetailConsent = () => {
  const [selectedId, setSelectedId] = useState<'1' | '2'>('1');
  return (
    <>
      <CustomerConsentDisplayContainer>
        <ConsentTitle />
        <ConsentImage />
        <ConfirmationButton>
          詳細を確認
          <img src="/svg/icon_fileSearch.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
        </ConfirmationButton>
      </CustomerConsentDisplayContainer>
      <ConsentList />
      <ConsentListItem selectedId={selectedId} setSelectedId={setSelectedId} />
    </>
  );
};

export default CustomerDetailConsent;
