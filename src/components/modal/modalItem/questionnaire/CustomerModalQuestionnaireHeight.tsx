import {
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItem,
  CustomerDetailItemTitleRight,
  CustomerDetailItemRight,
} from '../../../../styles/customerDetailInformation';

const QuestionnaireHeight = () => {
  return (
    <>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>身長</CustomerDetailItemTitle>
          <CustomerDetailItem>158cm</CustomerDetailItem>
        </CustomerDetailItemBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitleRight>体重</CustomerDetailItemTitleRight>
          <CustomerDetailItemRight>45kg</CustomerDetailItemRight>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </>
  );
};

export default QuestionnaireHeight;
