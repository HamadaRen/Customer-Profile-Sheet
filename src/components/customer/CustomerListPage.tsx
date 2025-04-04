import styled from 'styled-components';
import CustomerListHeader from '../header/CustomerListHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import CustomerInformationDetails from './CustomerInformationDetails';
import CustomerHeader from '../header/CustomerHeader';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { IconButton } from '@mui/material';

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
  };

  const location = useLocation();

  useEffect(() => {
    getCustomerData();
  }, []);

  const handleEditClick = (id: string) => {
    window.location.replace(`http://localhost:3000/customer/${id}`);
  };

  //.then + .catchでエラー確認しながら削除ボタン押した瞬間に反応してくれるようになる
  const handleDelete = async (id: string) => {
    console.log('id', id);
    await axios
      .put(`http://localhost:3010/delete/${id}`)
      .then(() => {
        getCustomerData();
      })
      .catch(() => {
      });
  };
  //ここまで

  return (
    <>
      <CustomerHeader />
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
                onClick={() => handleEditClick(userData.id)}
              >
                {userData.name}
              </SHeader>
              <SHeader
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
              >
                {userData.nameKana}
              </SHeader>
              <SHeader
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
              >
                {userData.tel}
              </SHeader>
              <SButton
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
              >
                <IconButton
                  style={{ alignItems: 'center', paddingTop: 1, marginRight: 30 }}
                  onClick={() => handleEditClick(userData.id)}
                >
                  <ModeEditRoundedIcon />
                </IconButton>
                <IconButton style={{ alignItems: 'center', paddingTop: 1 }} onClick={() => handleDelete(userData.id)}>
                  <DeleteForeverRoundedIcon style={{ position: 'relative', color: 'red' }} />
                </IconButton>
              </SButton>
            </>
          ))}
        </>
      </GridContainer>
    </>
  );
};

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #efefef;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-auto-rows: 2rem;
  border: 1px solid #000;
`;

const SHeader = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  border: 1px solid #000;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : '#dcdcdc')};
  color: inherit;
`;

const SButton = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  border: 1px solid #000;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#dcdcdc' : '#dcdcdc')};
  color: inherit;
`;

export default CustomerListPage;
