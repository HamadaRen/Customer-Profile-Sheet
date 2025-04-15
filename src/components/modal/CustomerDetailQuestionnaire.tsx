import React from 'react';
import styled from 'styled-components';
import {
  CustomerBasicInformationBox,
  CustomerDetailItem,
  CustomerDetailItemBox,
  CustomerDetailItemLong,
  CustomerDetailItemRight,
  CustomerDetailItemTitle,
  CustomerDetailItemTitleRight,
  CustomerInformationEditButton,
} from '../../styles/application';

const CustomerDetailQuestionnaire = () => {
  return (
    <QuestionnaireContainer>
      <CustomerInformationEditButton style={{ position: 'relative', left: '30rem', margin: '0 3rem 0 0' }}>
        情報を編集する
        <img src="/svg/icon_pen.svg" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
      </CustomerInformationEditButton>
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
          <CustomerDetailItemLong><ul style={{padding: '0 1rem'}}><li>胸のあたりの赤み</li><li>お背中の荒れ</li><li>おでこのニキビ跡</li></ul></CustomerDetailItemLong>
        </CustomerDetailItemBox>
      </CustomerBasicInformationBox>
    </QuestionnaireContainer>
  );
};

const QuestionnaireContainer = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 0.5rem 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export default CustomerDetailQuestionnaire;
