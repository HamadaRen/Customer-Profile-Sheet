import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CustomerFooterButton, CustomerFooterButtonLine, CustomerFooterButtonNumber } from '../../styles/application';

const CustomerFooter = () => {
  const [selected, setSelected] = useState<number>(1)
  const [numAry, setNumAry] = useState<number[]>([])


  return (
    <CustomerFoot>
      <CustomerFooterButtonLine>
        <CustomerFooterButton>
        <img src="/svg/icon_leftExpansion.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </CustomerFooterButton>
        <CustomerFooterButtonNumber $selected={selected === 1} onClick={() => setSelected(1)}>
        1
        </CustomerFooterButtonNumber>
        <CustomerFooterButtonNumber $selected={selected === 2} onClick={() => setSelected(2)}>
        2
        </CustomerFooterButtonNumber>
        <CustomerFooterButtonNumber $selected={selected === 3} onClick={() => setSelected(3)}>
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
