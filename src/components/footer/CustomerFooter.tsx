import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CustomerFooterButton, CustomerFooterButtonLine, CustomerFooterButtonNumber } from '../../styles/application';

const CustomerFooter = () => {
  const [selected, setSelected] = useState<number>(1)
  const [numAry, setNumAry] = useState<number[]>([])


  return (
    <CustomerFoot>
      <CustomerFooterButtonLine>
        <CustomerFootPosition>
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
        </CustomerFootPosition>
      </CustomerFooterButtonLine>
    </CustomerFoot>
  )
}

const CustomerFoot = styled.div`
  background: #ddd7d1;
  width: 100%;
  height: 4.1875rem;
  text-align: center;
  position: relative;
  /* min-height: 100%; */
`

const CustomerFootPosition = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem 0.625rem 1.25rem;
  align-items: flex-end;
  gap: 0.625rem;
  border-radius: 10px;
  background-blend-mode: multiply;
`

export default CustomerFooter
