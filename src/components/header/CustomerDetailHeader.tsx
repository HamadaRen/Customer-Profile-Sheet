import {
  CustomerDetail,
  CustomerNameKana,
  CustomerDetailName,
  CustomerDetailNumber,
  TelIcon,
  IconPhoto,
  ManagerName,
} from '../../styles/application';

const ICON_STYLES = { width: '1.25rem', height: '1rem' };

const CustomerDetailHeader = () => {
  return (
    <CustomerDetail>
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
      <IconPhoto>
        <img
          src="/svg/icon_user_photo.svg"
          alt=""
          style={{
            width: '2.5rem',
            height: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 500 }}>担当者</div>
          <ManagerName>濵田 錬</ManagerName>
        </div>
      </IconPhoto>
    </CustomerDetail>
  );
};

export default CustomerDetailHeader;
