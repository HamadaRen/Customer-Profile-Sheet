import React, { useState } from 'react';
import styled from 'styled-components';

type UserDetailsType = {
  name: string;
  kana: string;
  birthday: string;
  gender: string;
  telephone: string;
  email: string;
  address: string;
};
const CustomerEntryPage = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    name: '',
    kana: '',
    birthday: '',
    gender: '',
    telephone: '',
    email: '',
    address: '',
  });

  console.log('@@@',userDetails)

  //userDetailsを登録欄に表示したい
  const handleRegistration = (e: any) => {
    e.preventDefault();
    setUserDetails({
      name: '',
      kana: '',
      birthday: '',
      gender: '',
      telephone: '',
      email: '',
      address: '',
    })
  }

  return (
    <Container>
    <form>
      <div>
        名前：
      <input
        type="text"
        onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
        placeholder="名前"
        value={userDetails.name}
        />
      </div>
      <div>
      カナ：
      <input
        type="text"
        onChange={(e) => setUserDetails((prev) => ({ ...prev, kana: e.target.value }))}
        placeholder="カナ"
        value={userDetails.kana}
        />
      </div>

      <div>
        生年月日：
      <input
      type="text"
      onChange={(e) => setUserDetails((prev) => ({ ...prev, kana: e.target.value }))}
      placeholder="2001/12/04"
      />
      </div>

      <div>
        性別：
      <input
        type="text"
        onChange={(e) => setUserDetails((prev) => ({ ...prev, gender: e.target.value }))}
        placeholder="性別"
        value={userDetails.gender}
        />
      </div>

      <div>
        電話番号
      <input
        type="text"
        onChange={(e) => setUserDetails((prev) => ({ ...prev, telephone: e.target.value }))}
        placeholder="電話番号"
        value={userDetails.telephone}
        />
      </div>

      <div>
        email：
      <input
        type="text"
        onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
        placeholder="メールアドレス"
        value={userDetails.email}
        />
      </div>

      <div>
        住所：
      <input
        type="text"
        onChange={(e) => setUserDetails((prev) => ({ ...prev, address: e.target.value }))}
        placeholder="住所"
        value={userDetails.address}
        />
      </div>
    </form>
    <div>
      <button onClick={handleRegistration}>登録</button>
    </div>
        </Container>
  );
};

const Container = styled.div`

  width: 500px;
  background: red;
`

export default CustomerEntryPage;
