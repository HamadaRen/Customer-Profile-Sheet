import React from 'react'
import { CustomerDetailFooterContainer, CustomerDetailPrinting } from '../../styles/application'

const CustomerDetailModalFooter = () => {
  return (
    <CustomerDetailFooterContainer>
        <CustomerDetailPrinting>
          印刷
          <img src="/svg/icon_printing.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
        </CustomerDetailPrinting>
        <CustomerDetailPrinting>
          ダウンロード
          <img src="/svg/icon_download.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
        </CustomerDetailPrinting>
      </CustomerDetailFooterContainer>
  )
}

export default CustomerDetailModalFooter
