import { CustomerDetail } from '../../styles/customerDetailHeader';
import CustomerDetailHeaderCustomerData from './headerItem/CustomerDetailHeaderCustomerData';
import CustomerDetailHeaderManager from './headerItem/CustomerDetailHeaderManager';

const CustomerDetailHeader = () => {
  return (
    <CustomerDetail>
      <CustomerDetailHeaderCustomerData />
      <CustomerDetailHeaderManager />
    </CustomerDetail>
  );
};

export default CustomerDetailHeader;
