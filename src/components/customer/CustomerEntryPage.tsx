import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from "react-datepicker"
import {ja} from 'date-fns/locale/ja'


const NEW_DATE = new Date();

type UserDetailsType = {
  name: string;
  // firstName: string;
  // lastNameKana: string;
  nameKana: string;
  birthday: Date;
  gender: string;
  tel: string;
  email: string;
  address: string;
};

const CustomerEntryPage = () => {
  // const initialDate: Date = "2001-12-4" as unknown as Date;
    const  [ birthday ,  setBirthday ]  =  useState<Date | null>(new Date('2001-12-04')) ;
    const [userDetails, setUserDetails] = useState<UserDetailsType>({
      name: '',
      // firstName: '',
      // lastNameKana: '',
      nameKana: '',
      birthday: birthday || new Date(),
      gender: '男性',
      tel: '',
      email: '',
      address: '',
    });
    console.log('birthday', birthday)
    console.log('birthday', userDetails.birthday)
    
  //初期値を当日にする
    // useEffect(() => {
    //   setUserDetails((prev) => ({ ...prev, birthday: birthday }))
    // },[setBirthday])
    registerLocale('ja', ja)

    // endDate.setDate(endDate.getDate()+31);

    // console.log('startDate = '+ birthday);
    // console.log('endDate = '+ endDate);

  const genderItems = [
    {
      label: '男性',
      value: '男性',
    },
    {
      label: '女性',
      value: '女性',
    },
    {
      label: 'その他',
      value: 'その他',
    },
  ];

  //userDetailsを登録欄に表示したい
  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      userDetails.name === '' ||
      // userDetails.firstName === '' ||
      // userDetails.lastNameKana === '' ||
      userDetails.nameKana === '' ||
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
      birthday: birthday || new Date(),
      gender: '男性',
      tel: '',
      email: '',
      address: '',
    });
    const genderCheckBox = document.querySelectorAll('genderChecked')
  };


  const handleRawChange = (e: any) => {
    const target = e.target as HTMLInputElement; // 型アサーションで修正
    const rawValue = target.value;
    if(!rawValue){
      return;
    }
    console.log('object', rawValue)
  
    const match = rawValue.match(/(\d{4})[年\/-]?(\d{1,2})[月\/-]?(\d{1,2})/);
    if (match) {
      const year = parseInt(match[1]);
      const month = parseInt(match[2]) - 1;
      const day = parseInt(match[3]);
      const newDate = new Date(year, month, day);
  
      if (!isNaN(newDate.getTime())) {
        setBirthday(newDate);
      }
    }
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
            <DatePicker
            locale="ja"
            selected={birthday}
            dateFormat="yyyy年MM月dd日"
            onChange={(date) => setBirthday(date)}
            //onChangeRawで手入力時の処理を走らせる関数を呼び出す
            onChangeRaw={handleRawChange}
            // onChange={(e) => setUserDetails((prev) => ({ ...prev, birthday: birthday }))}
            maxDate={NEW_DATE}
            
              />
          </label>
        </BirthdayForm>

        <GenderForm>
          <label>
            性別：
            {genderItems.map((item, index) => (
              <label key={item.label}>
                <input
                  type="radio"
                  name='genderChecked'
                  // onChange={(e) => setUserDetails((prev) => ({ ...prev, gender: e.target.value }))}
                  value={item.value}
                  onChange={() => setUserDetails((prev) => ({ ...prev, gender: item.value }))}
                  style={{ width: 43, height: 28 }}
                  defaultChecked={item.value==="男性"}
                />
                {item.label}
              </label>
            ))}
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
  top: 22rem;
  height: 35px;
  box-shadow: 1px 1.6px 1px #000;
  font-weight: bold;
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
  top: 10rem;
`;

const TelephoneForm = styled.div`
  position: relative;
  top: 13rem;
`;

const EmailForm = styled.div`
  position: relative;
  top: 16rem;
`;

const AddressForm = styled.div`
  position: relative;
  top: 19rem;
`;

export default CustomerEntryPage;
