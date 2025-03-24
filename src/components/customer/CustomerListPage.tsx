import styled from 'styled-components';
import CustomerListHeader from '../header/CustomerHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type UserDetailsType = {
  id: string;
  name: string;
  nameKana: string;
  birthday: string;
  gender: string;
  tel: string;
  email: string;
  address: string;
  created_at: string;
  update_at: string;
};

const CustomerListPage = () => {
  const [customerDataArray, setCustomerDataArray] = useState<UserDetailsType[]>([])
  
  const getCustomerData = async () => {
    const customerData = await axios('http://localhost:3010/');
    setCustomerDataArray(customerData.data);
  };

  const location = useLocation();

  useEffect(() => {
    getCustomerData();
  }, []);

  return (
    <GridContainer>
      <CustomerListHeader />
      <>
      {customerDataArray.map((userData) => (
        <>
        <SHeader>{userData.name}</SHeader>
        <SHeader>{userData.nameKana}</SHeader>
        <SHeader>
        <SButton $selected={location.pathname === '/edit'} as={Link} to="/edit">
        詳細
        </SButton>
        </SHeader>
        </>
        // console.log('mapした配列の要素', userData)
      ))}
      </>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #efefef;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-auto-rows: 2rem;
  border: solid #000;
`;
const SHeader = styled.div`
  height: 2rem;
  border: 1px solid;
  align-items: center;
`;
const SButton = styled.div<{ $selected?: boolean }>`
/* text-decoration: none; */
  color: inherit;
  display: flex;
  align-items: center;
  /* padding:0.2rem; */
  cursor: pointer;
  /* border-bottom: 1px solid #fafafa; */
  /* background-color: ${({ $selected }) => ($selected ? '#526A8E' : 'transparent')};
  &:hover {
    background-color: #526a8e;
  } */




  width: 100%;
  height: 100%;
  background: #d3d3d3;
  cursor: pointer;
  &:hover {
  background: #fff;
  color: #000;
}
`

export default CustomerListPage;
