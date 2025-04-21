import { IconPhoto, ManagerName } from '../../../styles/customerDetailHeader'

const CustomerDetailHeaderManager = () => {
  return (
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
  )
}

export default CustomerDetailHeaderManager
