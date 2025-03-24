import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import CustomerManagement from '../components/customer/Index';
import CustomerEntryPage from '../components/customer/CustomerEntryPage';
import CustomerListPage from '../components/customer/CustomerListPage';
import CustomerInformationDetails from '../components/customer/CustomerInformationDetails';

type UserDetailsType = {
  name: string;
  // firstName: string;
  nameKana: string;
  // firstNameKana: string;
  birthday: string;
  gender: string;
  tel: string;
  email: string;
  address: string;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route path="/" element={<CustomerListPage />}></Route>
          <Route path="/customer" element={<CustomerEntryPage />}></Route>
          <Route path="/edit" element={<CustomerInformationDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
