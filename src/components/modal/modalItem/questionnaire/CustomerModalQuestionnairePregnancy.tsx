import {
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItem,
  CustomerDetailItemTitleRight,
  CustomerDetailItemRight,
} from '../../../../styles/customerDetailInformation';

const QuestionnairePregnancy = () => {
  return (
    <>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>妊娠の有無</CustomerDetailItemTitle>
          <CustomerDetailItem>無し</CustomerDetailItem>
        </CustomerDetailItemBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitleRight>服用中のお薬</CustomerDetailItemTitleRight>
          <CustomerDetailItemRight>フリウェルLD</CustomerDetailItemRight>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </>
  );
};

export default QuestionnairePregnancy;
