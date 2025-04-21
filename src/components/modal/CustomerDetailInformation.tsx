import { CustomerInformationBodyContainer } from '../../styles/customerDetailInformation';
import CustomerModalInformationItem from './modalItem/Information/CustomerModalInformationItem';
import CustomerModalSharedItem from './modalItem/Information/CustomerModalSharedItem';

type CustomerDetailType = {
  id: string;
  birthday: Date;
  age: number;
  address: string;
  tel: string;
  email: string;
};

type SharedMatterType = {
  id: string;
  name: string;
  memo: string;
};

const CustomerDetailInformation = () => {
  return (
    <CustomerInformationBodyContainer>
      <CustomerModalInformationItem />
      <CustomerModalSharedItem />
    </CustomerInformationBodyContainer>
  );
};

export default CustomerDetailInformation;
