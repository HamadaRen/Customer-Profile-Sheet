import {
  CustomerDetailSharedSubHeaderContainer,
  CustomerDetailSharedFixedContainer,
  CustomerDetailFixedMemoBox,
  CustomerDetailFixedMemoDate,
  CustomerDetailFixedMemoBodyBox,
  CustomerDetailFixedMemoBody,
  CustomerDetailFixedMemoPerson,
  CustomerDetailDateMemoBox,
  CustomerDetailMemoTime,
} from '../../../../styles/customerDetailInformation';

const CustomerModalSharedItem = () => {
  return (
    <>
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
            width: 'calc(100% - 6rem)',
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
    </>
  );
};

export default CustomerModalSharedItem;
