import React from 'react';
import styled from 'styled-components';
import { Button, ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';

const OperationHeaderButton = () => {
  const handleClick = () => {
    window.location.href = 'http://localhost:3000/treatmentMenu/entry';
  }
  return (
    <AddButton>
      <h2 style={{ display: 'inline-block', position: 'relative', left: '5%' }}>施術リスト</h2>
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
        施術追加
      </Button>
    </AddButton>
  );
};

const AddButton = styled.div`
  text-align: center;
  background: #f3f3f3;
`;
const SHeader = styled.div`
  text-align: center;
  position: relative;
  width: 20%;
  left: 40%;
`;

export default OperationHeaderButton;
