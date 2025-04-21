import {
  CustomerInformationSubHeaderBox,
  CustomerInformationEditButtonBox,
  CustomerInformationEditButton,
  CustomerBasicInformationSubHeaderBox,
  CustomerBasicInformationContainer,
  CustomerBasicInformationBox,
  CustomerDetailItemBox,
  CustomerDetailItemTitle,
  CustomerDetailItem,
  CustomerDetailItemTitleRight,
  CustomerDetailItemRight,
  CustomerDetailItemLong,
} from '../../../../styles/customerDetailInformation';

const CustomerModalInformationItem = () => {
  return (
    <>
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
              width: 'calc(100% - 6rem)',
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
    </>
  );
};

export default CustomerModalInformationItem;
