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
              style={{"width": 180, "height": 30}}
            />
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))}
              placeholder="名"
              value={userDetails.firstName}
              style={{"width": 180, "height": 30}}
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
              style={{"width": 180, "height": 30}}
            />
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, firstNameKana: e.target.value }))}
              placeholder="メイ"
              value={userDetails.firstNameKana}
              style={{"width": 180, "height": 30}}
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
              style={{"width": 250, "height": 30}}
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
              style={{"width": 200, "height": 30}}
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
              style={{"width": 250, "height": 30}}
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
              style={{"width": 320, "height": 30}}
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
              style={{"width": 370, "height": 30}}
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
  text-align: center;
  width: 100%;
  height: 100%;
  background: #efefef;
`;

const RegistrationButton = styled.button`
  cursor: pointer;
  background: #007bbb;
  color: white;
  border-radius: 3px;
  border: 0px;
  position: relative;
  top: 20rem;
  height: 30px;
  box-shadow: 0.5px 1px 1px #000;
  
  &:hover {
  transform: translateY(1px);
  box-shadow: none;
}`;

const NameForm = styled.div`
  position: relative;
  top: 2rem;
`;

const KanaForm = styled.div`
  position: relative;
  top: 4.5rem;
`;

const BirthdayForm = styled.div`
  position: relative;
  top: 7rem;
`;

const GenderForm = styled.div`
  position: relative;
  top: 9.5rem;
`;

const TelephoneForm = styled.div`
  position: relative;
  top: 12rem;
`;

const EmailForm = styled.div`
  position: relative;
  top: 14.5rem;
`;

const AddressForm = styled.div`
  position: relative;
  top: 17rem;
`;


export default CustomerEntryPage;
