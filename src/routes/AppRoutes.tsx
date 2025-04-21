import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import CustomerEntryPage from '../components/customer/CustomerEntryPage';
import CustomerListPage from '../components/customer/CustomerListPage';
import CustomerInformationDetails from '../components/customer/CustomerInformationDetails';
import NotFound from '../components/customer/NotFound';
import TreatmentAddPage from '../components/treatment/TreatmentMenuEntryPage';
import TreatmentMenuEditPage from '../components/treatment/EstheticTreatmentMenuEditPage';
import TreatmentTab from '../components/header/TreatmentTab';
import Login from '../login/Login';
import HairSalonTreatmentMenuEditPage from '../components/treatment/HairSalonTreatmentMenuEditPage';
import ReservationEntry from '../sales/ReservationEntry';
import SalesManagementScreen from '../sales/SalesManagement';
import SalesManagement from '../components/sidebar/SalesManagement';
import SalesAnalysis from '../components/sidebar/SalesAnalysis';
import MenuPrice from '../components/sidebar/MenuPrice';
import TicketManagement from '../components/sidebar/TicketManagement';

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
          <Route path="/:id" element={<CustomerListPage />}></Route>
          <Route path="/customer/entry" element={<CustomerEntryPage />}></Route>
          <Route path="/customer/:id" element={<CustomerInformationDetails />}></Route>
          <Route path="/treatmentMenu/entry" element={<TreatmentAddPage />}></Route>
          <Route path="/treatmentMenu" element={<TreatmentTab />}></Route>
          <Route path="/treatmentMenu/esthetic/:id" element={<TreatmentMenuEditPage />}></Route>
          <Route path="/treatmentMenu/hair/:id" element={<HairSalonTreatmentMenuEditPage />}></Route>
          <Route path="/sales" element={<SalesManagementScreen />}></Route>
          <Route path="/sales/entry" element={<ReservationEntry />}></Route>
          <Route path="/sales/management" element={<SalesManagement />}></Route>
          <Route path="/sales/analysis" element={<SalesAnalysis />}></Route>
          <Route path="/menu/price" element={<MenuPrice />}></Route>
          <Route path="/ticket/management" element={<TicketManagement />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
