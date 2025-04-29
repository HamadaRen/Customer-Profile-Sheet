import CustomerListHeader from '../header/CustomerListHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerHeader from '../header/CustomerHeader';
import CustomerFooter from '../footer/CustomerFooter';
import { GridContainer } from '../../styles/customerListPage';
import CustomerDetailModal from '../modal/CustomerDetailModal';
import CustomerListMapProcess from './listItem/CustomerListMapProcess';

type UserDetailsType = {
  id: string;
  name: string;
  tel: string;
  line: string;
  instagram: string;
  created_at: string;
  update_at: string;
};

type TicketDataType = {
  id: string;
  name: string;
};

type VisitorsDataType = {
  id: string;
  visitedTimes: number;
  created_at: string;
  updated_at: string;
};

type SharedMatters = {
  id: string;
  memo: string;
};

type StaffDataType = {
  id: string;
  name: string;
};

const CustomerListPage = () => {
  const [customerDataArray, setCustomerDataArray] = useState<UserDetailsType[]>([]);
  const [hoveredId, setHoveredId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [customerId, setCustomerId] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [managerName, setManagerName] = useState<string>('');

  const getCustomerData = async () => {
    const customerData = await axios.get('http://localhost:3011/customer');
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
    {
      id: '888',
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
      id: '999',
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
      id: '1000',
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
    <div style={{ display: 'grid', gridTemplateRows: '6rem 2rem 1fr 3.5rem', height: '100%', position: 'relative' }}>
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
        <CustomerListMapProcess
          fakeData={fakeData}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          handleEditClick={handleEditClick}
        />
      </GridContainer>
      <CustomerFooter />
    </div>
  );
};

export default CustomerListPage;
