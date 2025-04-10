import styled from 'styled-components';
import CustomerListHeader from '../header/CustomerHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomerInformationDetails from './CustomerInformationDetails';
import CustomerHeader from '../header/CustomerHeader';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
  const [modalOpen, setModalOpen] = useState<'close' | 'open'>('close');

  const getCustomerData = async () => {
    const customerData = await axios.get('http://localhost:3010/customer');
    setCustomerDataArray(customerData.data);
    console.log('getするデータ',customerData)
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
    await axios
      .put(`http://localhost:3010/customer/delete/${id}`)
      .then(() => {
        getCustomerData();
      })
      .catch(() => {});
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
                <IconButton style={{ alignItems: 'center', paddingTop: 1 }} onClick={() => setModalOpen('open')}>
                  <DeleteForeverRoundedIcon style={{ position: 'relative', color: 'red' }} />
                </IconButton>
              </SButton>
              <Modal
        open={modalOpen === 'open'}
        onClose={() => setModalOpen('close')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            顧客情報を削除してもよろしいですか？
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button>キャンセル</button>
            <button style={{position: 'relative', left: 210}}>削除する</button>
          </Typography>
        </Box>
      </Modal>
            </>
          ))}
        </>
      </GridContainer>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
  background-color: ${({ $selected }) => ($selected ? '#dcdcdc' : '#9baeca')};
  color: inherit;
`;

const SButton = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  border: 1px solid;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#dcdcdc' : '#778899')};
  color: inherit;
`;

export default CustomerListPage;
