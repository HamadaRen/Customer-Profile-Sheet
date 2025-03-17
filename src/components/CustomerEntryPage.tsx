import React, { useState } from 'react';
import styled from 'styled-components';

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
const CustomerEntryPage = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    birthday: '',
    gender: '',
    telephone: '',
    email: '',
    address: '',
  });

  //userDetailsを登録欄に表示したい
  const handleRegistration = (e: any) => {
    e.preventDefault();
    setUserDetails({
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      birthday: '',
      gender: '',
      telephone: '',
      email: '',
      address: '',
    });
  };

  console.log('@@@', userDetails);

  return (
    <Container>
      <form>
        <NameForm>
          <label>
            名前：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, lastName: e.target.value }))}
              placeholder="姓"
              value={userDetails.lastName}
            />
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))}
              placeholder="名"
              value={userDetails.firstName}
            />
          </label>
        </NameForm>

        <KanaForm>
          <label>
            カナ：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, lastNameKana: e.target.value }))}
              placeholder="セイ"
              value={userDetails.lastNameKana}
            />
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, firstNameKana: e.target.value }))}
              placeholder="メイ"
              value={userDetails.firstNameKana}
            />
          </label>
        </KanaForm>

        <BirthdayForm>
          <label>
            生年月日：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, birthday: e.target.value }))}
              placeholder="2001/12/04"
            />
          </label>
        </BirthdayForm>

        <GenderForm>
          <label>
            性別：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, gender: e.target.value }))}
              placeholder="性別"
              value={userDetails.gender}
            />
          </label>
        </GenderForm>

        <TelephoneForm>
          <label>
            電話番号：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, telephone: e.target.value }))}
              placeholder="電話番号"
              value={userDetails.telephone}
            />
          </label>
        </TelephoneForm>

        <EmailForm>
          <label>
            email：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="メールアドレス"
              value={userDetails.email}
            />
          </label>
        </EmailForm>

        <AddressForm>
          <label>
            住所：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, address: e.target.value }))}
              placeholder="住所"
              value={userDetails.address}
            />
          </label>
        </AddressForm>
      </form>
      <div>
        <RegistrationButton onClick={handleRegistration}>この内容で登録する</RegistrationButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 10%;
  text-align: center;
  width: 80%;
  height: 100vh;
  background: #efefef;
  position: absolute;
`;

const RegistrationButton = styled.button`
  cursor: pointer;
  background: #007bbb;
  color: white;
  border-radius: 3px;
  border: 0px;
  position: relative;
  top: 24.5rem;
  height: 30px;
  box-shadow: 0.5px 1px 1px #000;
  
  &:hover {
  transform: translateY(1px);
  box-shadow: none;
}`;

const NameForm = styled.div`
  position: relative;
  top: 3rem;
`;

const KanaForm = styled.div`
  position: relative;
  top: 6rem;
`;

const BirthdayForm = styled.div`
  position: relative;
  top: 9rem;
`;

const GenderForm = styled.div`
  position: relative;
  top: 12rem;
`;

const TelephoneForm = styled.div`
  position: relative;
  top: 15rem;
`;

const EmailForm = styled.div`
  position: relative;
  top: 18rem;
`;

const AddressForm = styled.div`
  position: relative;
  top: 21rem;
`;


export default CustomerEntryPage;
