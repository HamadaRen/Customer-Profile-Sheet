import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { AdvancedSearch, BottomExpansion, CustomerId, CustomerIdSearch, HeaderCustomerId, SearchButton, SearchCustomer } from '../../styles/application';

const CustomerHeader = () => {
  const handleClick = () => {
    window.location.href = 'http://localhost:3000/customer/entry';
  };
  return (
    <AddButton>
      <SearchCustomer>
        <HeaderCustomerId>
          顧客No
          <CustomerIdSearch />
          </HeaderCustomerId>
        <HeaderCustomerId>
          顧客名
          <CustomerIdSearch />
          </HeaderCustomerId>
        <HeaderCustomerId>
          担当者
          <CustomerIdSearch />
          </HeaderCustomerId>
          <SearchButton>
            <p>検索</p>
            <img src="/svg/icon_magnifyingGlass.svg" alt="" style={{ width: '1.3125rem', height: '1.3125rem' }} />
          </SearchButton>
          <AdvancedSearch>
            <img src="/svg/icon_group.svg" alt="" style={{ width: '1.3rem', height: '1rem', display: 'flex', padding: '0.4rem 0.14rem 0.2rem 0', justifyContent: 'center', alignItems: 'center' }} />
            詳細検索
            <BottomExpansion src="/svg/icon_bottomExpansion.svg" alt="" />
          </AdvancedSearch>
      </SearchCustomer>
    </AddButton>
  );
};

const AddButton = styled.div`
  text-align: center;
  background: #ddd7d1;
`;


export default CustomerHeader;
