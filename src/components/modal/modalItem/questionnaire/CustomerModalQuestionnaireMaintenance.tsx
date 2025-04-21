import {
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItemLong,
} from '../../../../styles/customerDetailInformation';

const QuestionnaireMaintenance = () => {
  return (
    <>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>お手入れ可否</CustomerDetailItemTitle>
          <CustomerDetailItemLong>手術経験あり、左足ボトルあり</CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </>
  );
};

export default QuestionnaireMaintenance;
