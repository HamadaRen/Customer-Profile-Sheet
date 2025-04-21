import {
  CustomerInformationEditButtonBox,
  CustomerInformationEditButton,
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItem,
  CustomerDetailItemTitleRight,
  CustomerDetailItemRight,
  CustomerDetailItemLong,
  QuestionnaireContainer,
} from '../../styles/customerDetailInformation';

type QuestionnaireType = {
  id: string;
  height: number;
  weight: number;
  pregnancy: string;
  medicine: string;
  surgery: string;
  allergy: string;
  purpose: string;
  pointsOfConcern: string;
};

const CustomerDetailQuestionnaire = () => {
  return (
    <QuestionnaireContainer>
      <CustomerInformationEditButtonBox style={{ padding: '0 2.4rem' }}>
        <CustomerInformationEditButton>
          情報を編集する
          <img src="/svg/icon_pen.svg" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
        </CustomerInformationEditButton>
      </CustomerInformationEditButtonBox>
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
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>お手入れ可否</CustomerDetailItemTitle>
          <CustomerDetailItemLong>手術経験あり、左足ボトルあり</CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>アレルギー/皮膚トラブル</CustomerDetailItemTitle>
          <CustomerDetailItemLong>卵アレルギー</CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
      <CustomerBasicInformationBox>
        <CustomerDetailItemBox>
          <CustomerDetailItemTitle>ご来店の目的</CustomerDetailItemTitle>
          <CustomerDetailItemLong>お肌改善・くすみ・しわ改善など</CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
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
    </QuestionnaireContainer>
  );
};



export default CustomerDetailQuestionnaire;
