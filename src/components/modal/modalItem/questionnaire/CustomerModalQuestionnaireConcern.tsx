import {
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItemLong,
} from '../../../../styles/customerDetailInformation';

const CustomerModalQuestionnaireConcern = () => {
  return (
    <>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>気になる箇所</CustomerDetailItemTitle>
          <CustomerDetailItemLong>
            <ul style={{ padding: '0 1rem' }}>
              <li>胸のあたりの赤み</li>
              <li>お背中の荒れ</li>
              <li>おでこのニキビ跡</li>
            </ul>
          </CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </>
  );
};

export default CustomerModalQuestionnaireConcern;
