import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';

const CustomerHeader = () => {
  const handleClick = () => {
    window.location.href = 'http://localhost:3000/customer/entry';
  }
  return (
    <AddButton>
          <h2 style={{ display: 'inline-block', position: 'relative', left: '5%' }}>顧客リスト</h2>
          <Button
            variant="contained"
            style={{
              background: '#192f60',
              position: 'relative',
              right: '45%',
              marginTop: '0.5%',
              marginBottom: '0.5%',
              paddingLeft: '4%',
              paddingRight: '4%',
              fontSize: '110%',
            }}
            onClick={handleClick}
          >
            顧客追加
          </Button>
        </AddButton>
  )
}

const AddButton = styled.div`
  text-align: center;
  background: #f3f3f3;
`;

export default CustomerHeader
