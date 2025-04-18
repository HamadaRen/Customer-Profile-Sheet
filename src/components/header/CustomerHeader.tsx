import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import {
  AdvancedSearch,
  BottomExpansion,
  CustomerId,
  CustomerIdSearchInput,
  HeaderCustomerId,
  SearchButton,
  SearchCustomer,
} from '../../styles/application';

type CustomerHeaderType = {
  customerId: string;
  setCustomerId: React.Dispatch<React.SetStateAction<string>>;
  customerName: string;
  setCustomerName: React.Dispatch<React.SetStateAction<string>>;
  managerName: string;
  setManagerName: React.Dispatch<React.SetStateAction<string>>;
};

const CustomerHeader = ({
  customerId,
  setCustomerId,
  customerName,
  setCustomerName,
  managerName,
  setManagerName,
}: CustomerHeaderType) => {
  // const handleClick = () => {
  //   window.location.href = 'http://localhost:3000/customer/entry';
  // };

  const handleIdChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setCustomerId(value);
  };
  const handleCustomerChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setCustomerName(value);
  };
  const handleIdManagerChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setManagerName(value);
  };

  const handleSearchClick = () => {
    if (customerId === '' && customerName === '' && managerName === '') {
      alert('検索項目が入力されていません');
      return;
    }
    setCustomerId('');
    setCustomerName('');
    setManagerName('');
  };

  return (
    <AddButton>
      <SearchCustomer>
        <HeaderCustomerId>
          顧客No
          <CustomerIdSearchInput value={customerId} placeholder="12345678" onChange={handleIdChange} />
        </HeaderCustomerId>
        <HeaderCustomerId>
          顧客名
          <CustomerIdSearchInput value={customerName} placeholder="山田太郎" onChange={handleCustomerChange} />
        </HeaderCustomerId>
        <HeaderCustomerId>
          担当者
          <CustomerIdSearchInput value={managerName} placeholder="田中花子" onChange={handleIdManagerChange} />
        </HeaderCustomerId>
        <SearchButton onClick={handleSearchClick}>
          <p>検索</p>
          <img src="/svg/icon_magnifyingGlass.svg" alt="" style={{ width: '1.3125rem', height: '1.3125rem' }} />
        </SearchButton>
        <AdvancedSearch>
          <img
            src="/svg/icon_group.svg"
            alt=""
            style={{
              width: '1.3rem',
              height: '1rem',
              display: 'flex',
              padding: '0.4rem 0.14rem 0.2rem 0',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
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
