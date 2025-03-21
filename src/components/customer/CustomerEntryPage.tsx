import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

type UserDetailsType = {
  name: string;
  // firstName: string;
  // lastNameKana: string;
  nameKana: string;
  birthday: string;
  gender: string;
  tel: string;
  email: string;
  address: string;
};

type CustomerEntryPageProps = {
  setUserDataArray: React.Dispatch<React.SetStateAction<UserDetailsType[]>>;
  userDataArray: UserDetailsType[];
};

const CustomerEntryPage = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    name: '',
    // firstName: '',
    // lastNameKana: '',
    nameKana: '',
    birthday: '',
    gender: '',
    tel: '',
    email: '',
    address: '',
  });

  //userDetailsを登録欄に表示したい
  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      userDetails.name === '' ||
      // userDetails.firstName === '' ||
      // userDetails.lastNameKana === '' ||
      userDetails.nameKana === '' ||
      userDetails.birthday === '' ||
      userDetails.gender === '' ||
      userDetails.tel === '' ||
      userDetails.email === ''
    ) {
      alert('入力していない項目があります');
      return;
    }
    //ここまでオッケーこの下をAPIに修正

    await axios.post('http://localhost:3010/add', { userDetails });

    setUserDetails({
      name: '',
      // firstName: '',
      // lastNameKana: '',
      nameKana: '',
      birthday: '',
      gender: '',
      tel: '',
      email: '',
      address: '',
    });
  };

  return (
    <Container>
      <form>
        <NameForm>
          <label>
            名前：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="山田　太郎"
              value={userDetails.name}
              style={{ width: 250, height: 30 }}
            />
          </label>
        </NameForm>

        <KanaForm>
          <label>
            カナ：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, nameKana: e.target.value }))}
              placeholder="ヤマダ　タロウ"
              value={userDetails.nameKana}
              style={{ width: 250, height: 30 }}
            />
          </label>
        </KanaForm>

        <BirthdayForm>
          <label>
            生年月日：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, birthday: e.target.value }))}
              placeholder="2001-12-04"
              value={userDetails.birthday}
              style={{ width: 250, height: 30 }}
            />
          </label>
        </BirthdayForm>

        <GenderForm>
          <label>
            性別：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, gender: e.target.value }))}
              placeholder="男性/女性/その他"
              value={userDetails.gender}
              style={{ width: 200, height: 30 }}
            />
          </label>
        </GenderForm>

        <TelephoneForm>
          <label>
            電話番号：
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, tel: e.target.value }))}
              placeholder="電話番号(ハイフンなし)"
              value={userDetails.tel}
              style={{ width: 250, height: 30 }}
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
              style={{ width: 320, height: 30 }}
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
              style={{ width: 370, height: 30 }}
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
  height: 35px;
  box-shadow: 1px 1.6px 1px #000;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

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
