import {
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItemLong,
} from '../../../../styles/customerDetailInformation';

const CustomerModalQuestionnairePurpose = () => {
  return (
    <>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>ご来店の目的</CustomerDetailItemTitle>
          <CustomerDetailItemLong>お肌改善・くすみ・しわ改善など</CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </>
  );
};

export default CustomerModalQuestionnairePurpose;
