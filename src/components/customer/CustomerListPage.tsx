import styled from 'styled-components';
import CustomerListHeader from '../header/CustomerListHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerHeader from '../header/CustomerHeader';
import CustomerFooter from '../footer/CustomerFooter';
import {
  CustomerId,
  Tel,
  ContactButton,
  Ticket,
  TicketName,
  TicketTime,
  TicketKinds,
  TicketKindsTime,
  TicketButton,
  Visitors,
  Remarks,
  ListHeaderContact,
  ListHeaderCustomerName,
} from '../../styles/application';
import CustomerDetailModal from '../modal/CustomerDetailModal';

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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [customerId, setCustomerId] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [managerName, setManagerName] = useState<string>('');

  const getCustomerData = async () => {
    const customerData = await axios.get('http://localhost:3010/customer');
    setCustomerDataArray(customerData.data);
  };

  const location = useLocation();

  useEffect(() => {
    getCustomerData();
  }, []);

  const handleEditClick = (id: string) => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal((showModal) => !showModal);
  };

  //.then + .catchでエラー確認しながら削除ボタン押した瞬間に反応してくれるようになる
  const handleDelete = async (id: string) => {
    console.log('id', id);
    await axios
      .put(`http://localhost:3010/customer/delete/${id}`)
      .then(() => {
        getCustomerData();
      })
      .catch(() => {});
  };

  const fakeData = [
    {
      id: '111',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
    {
      id: '222',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
    {
      id: '333',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
    {
      id: '444',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
    {
      id: '555',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
    {
      id: '666',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
    {
      id: '777',
      name: '濵田 錬',
      contact: '07012345678',
      ticket: 'ララピール体験',
      visit: '2',
      firstVisit: '2025/03/03',
      lastVisit: '2025/03/30',
      period: '1カ月',
      staff: '濱田 錬',
      memo: '敏感肌のお客様です',
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateRows: '6rem 2rem 1fr 5rem', height: '100%', position: 'relative' }}>
      <CustomerDetailModal showModal={showModal} handleModalClose={handleModalClose} />
      <CustomerHeader
        customerId={customerId}
        setCustomerId={setCustomerId}
        customerName={customerName}
        setCustomerName={setCustomerName}
        managerName={managerName}
        setManagerName={setManagerName}
      />
      <CustomerListHeader />
      <GridContainer>
        <>
          {fakeData.map((userData, index) => (
            <>
              <CustomerId
                key={userData.id}
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.id}
              </CustomerId>
              <ListHeaderCustomerName
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                <div style={{ display: 'flex', width: '7rem', justifyContent: 'center', alignItems: 'center' }}>
                  {userData.name}
                </div>
              </ListHeaderCustomerName>
              <ListHeaderContact
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                  <Tel>
                    <img src="/svg/icon_tel.svg" alt="" style={{ width: '1.0625rem', height: '1rem', flexShrink: 0 }} />
                    {userData.contact}
                  </Tel>
                  <Tel>
                    <img
                      src="/svg/icon_line.svg"
                      alt=""
                      style={{ width: '1.0625rem', height: '1rem', flexShrink: 0, aspectRatio: 17 / 18 }}
                    />
                    LINE
                  </Tel>
                  <Tel>
                    <img
                      src="/svg/icon_instagram.svg"
                      alt=""
                      style={{
                        width: '1.0625rem',
                        height: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    />
                    Instagram
                  </Tel>
                  <ContactButton>
                    繋げる
                    <img
                      src="/svg/icon_arrow.svg"
                      alt=""
                      style={{ width: '1.0625rem', height: '1.125rem', flexShrink: 0 }}
                    />
                  </ContactButton>
                </div>
              </ListHeaderContact>
              <Ticket
                key={userData.id}
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.125rem' }}>
                  <TicketName>{userData.ticket}</TicketName>
                  <TicketTime>仕様数(2/5)</TicketTime>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TicketKinds>その他チケット</TicketKinds>
                    <TicketKindsTime>+8</TicketKindsTime>
                    <TicketButton>
                      チケット情報
                      <img
                        src="/svg/icon_ticket_green.svg"
                        alt=""
                        style={{ width: '1.0625rem', height: '1.125rem', flexShrink: 0 }}
                      />
                    </TicketButton>
                  </div>
                </div>
              </Ticket>
              <Visitors
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.visit + '回'}
              </Visitors>
              <CustomerId
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.firstVisit}
              </CustomerId>
              <CustomerId
                key={userData.id}
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.lastVisit}
              </CustomerId>
              <CustomerId
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.period}
              </CustomerId>
              <CustomerId
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.staff}
              </CustomerId>
              <Remarks
                onMouseEnter={() => setHoveredId(userData.id)}
                onMouseLeave={() => setHoveredId('')}
                $selected={hoveredId === userData.id}
                onClick={() => handleEditClick(userData.id)}
                index={index}
              >
                {userData.memo}
              </Remarks>
            </>
          ))}
        </>
      </GridContainer>
      <CustomerFooter />
    </div>
  );
};

const GridContainer = styled.div<{ $listColor?: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: 7.3% 7.3% 12.2% 12.2% 6.7% 7.3% 7.3% 7.3% 7.3% 1fr;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #b0a396;
  overflow-y: scroll;
`;

export default CustomerListPage;
