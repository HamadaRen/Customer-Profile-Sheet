import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import CustomerManagement from '../components/customer/Index';
import CustomerEntryPage from '../components/customer/CustomerEntryPage';
import CustomerListPage from '../components/customer/CustomerListPage';
import CustomerInformationDetails from '../components/customer/CustomerInformationDetails';
import NotFound from '../components/customer/NotFound';
import TreatmentAddPage from '../components/treatment/TreatmentMenuAddPage';
import TreatmentMenuList from '../components/treatment/TreatmentMenuList';

type UserDetailsType = {
  name: string;
  nameKana: string;
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
          <Route path="/customer/entry" element={<CustomerEntryPage />}></Route>
          <Route path="/customer/:id" element={<CustomerInformationDetails />}></Route>
          <Route path="/treatmentMenu/entry" element={<TreatmentAddPage />}></Route>
          <Route path="/treatmentMenu" element={<TreatmentMenuList />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
