import { useState } from 'react';
import CustomerDetailHeader from '../header/CustomerDetailHeader';
import {
  CustomerInformationContainer,
  ModalContainer,
  ModalGrayContainer,
} from '../../styles/customerDetailModal';
import CustomerDetailTab from './CustomerDetailTab';
import CustomerDetailInformation from './CustomerDetailInformation';
import CustomerDetailQuestionnaire from './CustomerDetailQuestionnaire';
import CustomerDetailHistory from './CustomerDetailHistory';
import CustomerDetailConsent from './CustomerDetailConsent';
import CustomerDetailTicket from './CustomerDetailTicket';
import CustomerDetailModalFooter from '../footer/CustomerDetailModalFooter';

type CustomerDetailModalType = {
  showModal: boolean;
  handleModalClose: () => void;
};

const CustomerDetailModal = ({ showModal, handleModalClose }: CustomerDetailModalType) => {
  const [selected, setSelected] = useState<'customerInformation' | 'questionnaire' | 'history' | 'consent' | 'ticket'>(
    'customerInformation'
  );

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
      <ModalGrayContainer onClick={handleModalClose} $showModal={showModal} />
      <ModalContainer $animation={showModal ? 'open' : 'close'}>
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
