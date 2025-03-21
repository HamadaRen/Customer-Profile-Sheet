import React, { useState } from 'react';
import CustomerEntryPage from './CustomerEntryPage';
import CustomerListPage from './CustomerListPage';

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

const CustomerManagement = () => {
  const [userDataArray, setUserDataArray] = useState<UserDetailsType[]>([]);

  console.log('Indexで定義したuserDataArray', userDataArray);

  return (
    <>
      {/* <CustomerEntryPage setUserDataArray={setUserDataArray} userDataArray={userDataArray} /> */}
      {/* <CustomerListPage userDataArray={userDataArray} /> */}
    </>
  );
};

export default CustomerManagement;
