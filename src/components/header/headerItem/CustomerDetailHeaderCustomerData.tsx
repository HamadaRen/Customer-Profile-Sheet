import {
  CustomerNameKana,
  CustomerDetailName,
  CustomerDetailNumber,
  TelIcon,
} from '../../../styles/customerDetailHeader';

const ICON_STYLES = { width: '1.25rem', height: '1rem' };

const CustomerDetailHeaderCustomerData = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <CustomerNameKana>ハマダレン</CustomerNameKana>
        <CustomerDetailName>濵田 錬</CustomerDetailName>
        <CustomerDetailNumber>顧客No 111</CustomerDetailNumber>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <TelIcon>
          <img src="/svg/icon_tel_green.svg" alt="" style={ICON_STYLES} />
        </TelIcon>
        <TelIcon>
          <img src="/svg/icon_line_green.svg" alt="" style={ICON_STYLES} />
        </TelIcon>
        <TelIcon>
          <img src="/svg/icon_instagram_green.svg" alt="" style={ICON_STYLES} />
        </TelIcon>
      </div>
    </>
  );
};

export default CustomerDetailHeaderCustomerData;
