import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ja } from 'date-fns/locale/ja';
import { Link, useLocation, useParams } from 'react-router-dom';

type UserDetailsType = {
  id: string;
  name: string;
  nameKana: string;
  birthday: Date;
  gender: string;
  tel: string;
  email: string;
  address: string;
};

const NEW_DATE = new Date()

const CustomerInformationDetails = () => {
  //ここからGETメソッド
  const getCustomerData = async () => {
    const customerData = await axios.get(`http://localhost:3010/customer/${id}`);
    const getCustomerDataArray = customerData.data;
    const getCustomer: UserDetailsType = getCustomerDataArray.shift();
    setUserDetails({
    id: getCustomer.id,
    name: getCustomer.name,
    nameKana: getCustomer.nameKana,
    birthday: new Date(getCustomer.birthday),
    gender: getCustomer.gender,
    tel: getCustomer.tel,
    email: getCustomer.email,
    address: getCustomer.address,
    });
  };
  // const initialDate: Date = '2001-12-4' as unknown as Date;
  const [birthday, setBirthday] = useState<Date | null>(new Date());
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    id: '',
    name: '',
    nameKana: '',
    birthday: birthday || new Date(),
    gender: '',
    tel: '',
    email: '',
    address: '',
  });
  
  const params = useParams();
  const id = params.id;


  const location = useLocation();

  
  // console.log('getした配列!', customerData);
  //初期値を当日にする
  registerLocale('ja', ja);
  
  // endDate.setDate(endDate.getDate()+31);
  
  // console.log('startDate = '+ birthday);
  // console.log('endDate = '+ endDate);
  const handleChange = (date: Date | null) => {
    setBirthday(date);
  };
  
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
      userDetails.nameKana === '' ||
      userDetails.gender === '' ||
      userDetails.tel === '' ||
      userDetails.email === ''
    ) {
      alert('入力していない項目があります');
      return;
    }
    //ここまでオッケーこの下をAPIに修正
    
    await axios.put('http://localhost:3010/put', { userDetails });
    
    // setUserDetails({
      //   id: '',
      //   name: '',
      //   // firstName: '',
      //   // lastNameKana: '',
      //   nameKana: '',
      //   birthday: initialDate,
      //   gender: userDetails.gender,
      //   tel: '',
      //   email: '',
      //   address: '',
      // });
    };

    const handleRawChange = (e: any) => {
      const rawTarget = e.target as HTMLInputElement;
      const rawValue = rawTarget.value;
      if(!rawValue){
        return;
      }
      console.log('hakka+ろーばりゅー', rawValue)
      const match = rawValue.match(/(\d{4})[年\/-]?(\d{1,2})[月\/-]?(\d{1,2})/)
      console.log('まっち', match)
      if (match) {
        const year = parseInt(match[1]);
        const month = parseInt(match[2]) - 1;
        const day = parseInt(match[3]);
        const newDate = new Date(year, month, day);
        
        if (!isNaN(newDate.getTime())) {
          setBirthday(newDate);
        }
      }
    }
    
    const handleDelete = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      await axios.put(`http://localhost:3010/put/delete/${id}`, {id});
    };

    useEffect(() => {
      getCustomerData();
    }, []);
  
    //birthdayの値が変わったときに発火するuseEffect
    useEffect(() => {
      if(birthday===null){
        return;
      }
        setUserDetails((prev) => ({ ...prev, birthday: birthday }))
    }, [birthday]);

    
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
              selected={userDetails.birthday}
              dateFormat="yyyy年MM月dd日"
              onChange={(date) => setBirthday(date)}
              onChangeRaw={handleRawChange}
              maxDate={NEW_DATE}
              // value={userDetails.birthday}
            />
          </label>
        </BirthdayForm>

        <GenderForm>
          <label>
            性別：
            {genderItems.map((item) => (
              <label key={item.label}>
                <input
                  type="radio"
                  name="genderChecked"
                  // onChange={(e) => setUserDetails((prev) => ({ ...prev, gender: e.target.value }))}
                  value={item.value}
                  onChange={() => setUserDetails((prev) => ({ ...prev, gender: item.value }))}
                  style={{ width: 43, height: 28 }}
                  checked={item.value === userDetails.gender}
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
      <div onClick={handleRegistration}>
        <RegistrationButton as={Link} to={'/'}>
          内容を確定する
        </RegistrationButton>
      </div>
      <div onClick={handleDelete}>
        <DeleteButton as={Link} to={'/'}>
          顧客情報を削除する
        </DeleteButton>
      </div>
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

const RegistrationButton = styled.div`
  cursor: pointer;
  background: #007bbb;
  color: #fff;
  border-radius: 3px;
  border: 0px;
  position: relative;
  top: 21rem;
  right: 7rem;
  display: inline-block;
  padding: 0.8rem 2rem;
  font-weight: bold;
  box-shadow: 1px 1.6px 1px #000;
  margin-right: 2%;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;
const DeleteButton = styled.div`
  cursor: pointer;
  background: #ea553a;
  color: #fff;
  border-radius: 3px;
  border: 0px;
  position: relative;
  top: 17.9rem;
  left: 9rem;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
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

export default CustomerInformationDetails;
