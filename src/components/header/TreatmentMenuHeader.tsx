import React from 'react'
import styled from 'styled-components';

const TreatmentMenuHeader = () => {
  return (
    <>
    <SHeader>施術名</SHeader>
    <SHeader>施術金額</SHeader>
    <SHeader>編集　/　削除</SHeader>
    </>
  )
}

const SHeader = styled.div`
  height: 2rem;
  border: 1px solid #000;
  background-color: #052B52;
  color: #fff;
  text-align: center;
  padding-top: 0.3rem;
`;


export default TreatmentMenuHeader
