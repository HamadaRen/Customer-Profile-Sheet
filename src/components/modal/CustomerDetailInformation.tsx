import React from 'react';
import styled from 'styled-components';
import { CustomerInformationBodyContainer, CustomerInformationSubHeaderBox, CustomerInformationEditButtonBox, CustomerInformationEditButton, CustomerBasicInformationSubHeaderBox, CustomerBasicInformationContainer, CustomerBasicInformationBox, CustomerDetailItemBox, CustomerDetailItemTitle, CustomerDetailItem, CustomerDetailItemTitleRight, CustomerDetailItemRight, CustomerDetailItemLong, CustomerDetailSharedSubHeaderContainer, CustomerDetailSharedFixedContainer, CustomerDetailFixedMemoBox, CustomerDetailFixedMemoDate, CustomerDetailFixedMemoBodyBox, CustomerDetailFixedMemoBody, CustomerDetailFixedMemoPerson, CustomerDetailDateMemoBox, CustomerDetailMemoTime, CustomerDetailFooterContainer, CustomerDetailPrinting } from '../../styles/application';

const CustomerDetailInformation = () => {
  return (
    <CustomerInformationBodyContainer>
      <CustomerInformationSubHeaderBox>
        <CustomerInformationEditButtonBox>
          <CustomerInformationEditButton>
            情報を編集する
            <img src="/svg/icon_pen.svg" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
          </CustomerInformationEditButton>
        </CustomerInformationEditButtonBox>
        <CustomerBasicInformationSubHeaderBox>
          <img src="/svg/icon_diamond.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
          基本情報
          <div
            style={{
              height: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '0.1rem solid #A29B93',
              width: '29rem',
              marginRight: '10rem',
            }}
          ></div>
        </CustomerBasicInformationSubHeaderBox>
      </CustomerInformationSubHeaderBox>
      <CustomerBasicInformationContainer>
        <CustomerBasicInformationBox>
          <CustomerDetailItemBox>
            <CustomerDetailItemTitle>生年月日</CustomerDetailItemTitle>
            <CustomerDetailItem>1988年12月12日</CustomerDetailItem>
          </CustomerDetailItemBox>
          <CustomerDetailItemBox>
            <CustomerDetailItemTitleRight>年齢</CustomerDetailItemTitleRight>
            <CustomerDetailItemRight>36歳</CustomerDetailItemRight>
          </CustomerDetailItemBox>
        </CustomerBasicInformationBox>
        <CustomerBasicInformationBox>
          <CustomerDetailItemBox>
            <CustomerDetailItemTitle>現住所</CustomerDetailItemTitle>
            <CustomerDetailItemLong>東京都港区東新橋1-2-3ヤマキ第二ビル</CustomerDetailItemLong>
          </CustomerDetailItemBox>
        </CustomerBasicInformationBox>
        <CustomerBasicInformationBox>
          <CustomerDetailItemBox>
            <CustomerDetailItemTitle>電話番号</CustomerDetailItemTitle>
            <CustomerDetailItem>080-1234-5678</CustomerDetailItem>
          </CustomerDetailItemBox>
          <CustomerDetailItemBox>
            <CustomerDetailItemTitleRight>メールアドレス</CustomerDetailItemTitleRight>
            <CustomerDetailItemRight>hamada@mail.com</CustomerDetailItemRight>
          </CustomerDetailItemBox>
        </CustomerBasicInformationBox>
      </CustomerBasicInformationContainer>
      <CustomerDetailSharedSubHeaderContainer>
        <img src="/svg/icon_diamond.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
        共有事項
        <div
          style={{
            height: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '0.1rem solid #A29B93',
            width: '29rem',
            marginRight: '0.5rem',
          }}
        ></div>
      </CustomerDetailSharedSubHeaderContainer>
      <CustomerDetailSharedFixedContainer>
        <CustomerDetailFixedMemoBox>
          <CustomerDetailFixedMemoDate>
            <img src="/svg/icon_pin_green.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
            固定
          </CustomerDetailFixedMemoDate>
          <CustomerDetailFixedMemoBodyBox>
            <CustomerDetailFixedMemoBody>
              敏感肌のお客様です。
              <br /> 特にお背中の肌荒れを気にされてました。
              <br /> 施術中に不安にさせないようケアお願いします。
            </CustomerDetailFixedMemoBody>
            <CustomerDetailFixedMemoPerson>
              最終記入者
              <img
                src="/svg/icon_user_photo.svg"
                alt=""
                style={{
                  width: '1rem',
                  height: '1.2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              濵田錬
            </CustomerDetailFixedMemoPerson>
          </CustomerDetailFixedMemoBodyBox>
        </CustomerDetailFixedMemoBox>
        <CustomerDetailDateMemoBox>
          <CustomerDetailFixedMemoDate>
            <img src="/svg/icon_watch_green.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
            2025/01/11<CustomerDetailMemoTime>21:03</CustomerDetailMemoTime>
          </CustomerDetailFixedMemoDate>
          <CustomerDetailFixedMemoBodyBox>
            <CustomerDetailFixedMemoBody>
              次回カウンセリング予定
              <br />
              施術後20分程度
            </CustomerDetailFixedMemoBody>
            <CustomerDetailFixedMemoPerson>
              記入者
              <img
                src="/svg/icon_user_photo.svg"
                alt=""
                style={{
                  width: '1rem',
                  height: '1.2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              濵田錬
            </CustomerDetailFixedMemoPerson>
          </CustomerDetailFixedMemoBodyBox>
        </CustomerDetailDateMemoBox>
      </CustomerDetailSharedFixedContainer>
    </CustomerInformationBodyContainer>
  );
};


export default CustomerDetailInformation;
