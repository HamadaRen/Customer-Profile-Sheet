import {
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItemLong,
} from '../../../../styles/customerDetailInformation';

const QuestionnaireAllergy = () => {
  return (
    <>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>アレルギー/皮膚トラブル</CustomerDetailItemTitle>
          <CustomerDetailItemLong>卵アレルギー</CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </>
  );
};

export default QuestionnaireAllergy;
