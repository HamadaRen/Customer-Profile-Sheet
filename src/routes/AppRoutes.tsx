import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import CustomerManagement from '../components/customer/Index';

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
          <Route path="/" element={<CustomerManagement />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
