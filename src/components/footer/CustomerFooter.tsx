import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CustomerFooterButton, CustomerFooterButtonLine, CustomerFooterButtonNumber } from '../../styles/application';

const CustomerFooter = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [numAry, setNumAry] = useState<number[]>([])


  return (
    <CustomerFoot>
      <CustomerFooterButtonLine>
        <CustomerFooterButton>
        <img src="/svg/icon_leftExpansion.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </CustomerFooterButton>
        <CustomerFooterButtonNumber $selected={selected} onClick={() => setSelected(true)}>
        1
        </CustomerFooterButtonNumber>
        <CustomerFooterButtonNumber $selected={selected} onClick={() => setSelected(true)}>
        2
        </CustomerFooterButtonNumber>
        <CustomerFooterButtonNumber>
        3
        </CustomerFooterButtonNumber>
        <CustomerFooterButton>
        <img src="/svg/icon_leftExpansion.svg" alt="" style={{ width: '1.5rem', height: '1.5rem', transform: 'rotate(180deg)' }} />
        </CustomerFooterButton>
      </CustomerFooterButtonLine>
    </CustomerFoot>
  )
}

const CustomerFoot = styled.div`
  background: #ddd7d1;
  height: 4.1875rem;
  text-align: center;
`

export default CustomerFooter
