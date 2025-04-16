import React from 'react';
import styled from 'styled-components';
import { ModalContainer, CustomerDetail, CustomerNameKana, CustomerDetailName, CustomerDetailNumber, TelIcon, IconPhoto, ManagerName} from '../../styles/application';


const CustomerDetailHeader = () => {
  return (
      <CustomerDetail>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <CustomerNameKana>ハマダレン</CustomerNameKana>
            <CustomerDetailName>濵田 錬</CustomerDetailName>
            <CustomerDetailNumber>顧客No 111</CustomerDetailNumber>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <TelIcon>
              <img src="/svg/icon_tel_green.svg" alt="" style={{ width: '1.25rem', height: '1rem' }} />
            </TelIcon>
            <TelIcon>
              <img src="/svg/icon_line_green.svg" alt="" style={{ width: '1.25rem', height: '1rem' }} />
            </TelIcon>
            <TelIcon>
              <img src="/svg/icon_instagram_green.svg" alt="" style={{ width: '1.1rem', height: '1.1rem' }} />
            </TelIcon>
          </div>
        </div>
        <IconPhoto>
          <img
            src="/svg/icon_user_photo.svg"
            alt=""
            style={{
              width: '2rem',
              height: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 500 }}>担当者</div>
            <ManagerName>濵田 錬</ManagerName>
          </div>
        </IconPhoto>
      </CustomerDetail>
  )
}

export default CustomerDetailHeader
