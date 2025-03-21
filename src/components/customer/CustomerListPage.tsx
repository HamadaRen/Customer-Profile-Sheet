import styled from 'styled-components';
import CustomerListHeader from '../header/CustomerHeader';
import axios from 'axios';

type UserDetailsType = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  birthday: string;
  gender: string;
  telephone: string;
  email: string;
  address: string;
};

type CustomerListPage = {
  userDataArray: UserDetailsType[];
};

const CustomerListPage = async ({ userDataArray }: CustomerListPage) => {

  const customerData = await axios('http://localhost:3010/')
  console.log('getした配列', customerData)

  return (
    <GridContainer>
      <CustomerListHeader />
      <>
        {/* {customerData.map((userData) => {
          return (
          <>
          <SHeader>{userData.lastName + userData.firstName}</SHeader>
          <SHeader>{userData.lastNameKana + userData.firstNameKana}</SHeader>
          <SHeader>{userData.birthday}</SHeader>
          </>
          );
        })} */}
      </>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #efefef;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-auto-rows: 2rem;
  border: solid #000;
`;
const SHeader = styled.div`
  height: 2rem;
  border: 1px solid;
`;

export default CustomerListPage;
