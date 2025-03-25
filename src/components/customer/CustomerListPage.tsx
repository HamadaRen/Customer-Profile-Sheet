import styled from 'styled-components';
import CustomerListHeader from '../header/CustomerHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomerInformationDetails from './CustomerInformationDetails';

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
  delete_at: string;
};

const CustomerListPage = () => {
  const [customerDataArray, setCustomerDataArray] = useState<UserDetailsType[]>([]);
  const [hoveredId, setHoveredId] = useState<string>('');

  const getCustomerData = async () => {
    const customerData = await axios.get('http://localhost:3010/customer');
    setCustomerDataArray(customerData.data);
    console.log('getするデータ',customerData)
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
            <SHeader
              key={userData.id}
              onMouseEnter={() => setHoveredId(userData.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === userData.id}
              as={Link}
              to={`/customer/${userData.id}`}
            >
              {userData.name}
            </SHeader>
            <SHeader
              onMouseEnter={() => setHoveredId(userData.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === userData.id}
              as={Link}
              to={`/customer/${userData.id}`}
            >
              {userData.nameKana}
            </SHeader>
            <SHeader
              onMouseEnter={() => setHoveredId(userData.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === userData.id}
              as={Link}
              to={`/customer/${userData.id}`}
            >
              {userData.gender}
            </SHeader>
            <SButton
              onMouseEnter={() => setHoveredId(userData.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === userData.id}
              as={Link}
              to={`/customer/${userData.id}`}
            >
              詳細
            </SButton>
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
  grid-template-columns: 1fr 1fr 1fr 3fr;
  grid-auto-rows: 2rem;
  border: solid #000;
`;

const SHeader = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  border: 1px solid;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#b0c4de' : 'transparent')};
  color: inherit;
`;

const SButton = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  border: 1px solid;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#b0c4de' : '#dcdcdc')};
  color: inherit;
`;

export default CustomerListPage;
