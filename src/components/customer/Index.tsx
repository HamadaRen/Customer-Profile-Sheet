import React, { useState } from 'react';
import CustomerInformationDetails from './CustomerInformationDetails';

type UserDetailsType = {
  id: string;
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


  return (
    <>
      {/* <CustomerEntryPage setUserDataArray={setUserDataArray} userDataArray={userDataArray} /> */}
      {/* <CustomerListPage userDataArray={userDataArray} /> */}
      {/* <CustomerInformationDetails id={id} /> */}
    </>
  );
};

export default CustomerManagement;
