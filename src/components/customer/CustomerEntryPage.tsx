import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ja } from 'date-fns/locale/ja';

const NEW_DATE = new Date();

type UserDetailsType = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  birthday: Date;
  // gender: string;
  tel: string;
  email: string;
  address: string;
  customerNote: string;
};

const CustomerEntryPage = () => {
  const [birthday, setBirthday] = useState<Date | null>(new Date('2001-12-04'));
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    birthday: birthday || new Date(),
    // gender: '男性',
    tel: '',
    email: '',
    address: '',
    customerNote: '',
  });

  registerLocale('ja', ja);

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
      userDetails.lastName === '' ||
      userDetails.firstName === '' ||
      userDetails.lastNameKana === '' ||
      userDetails.firstNameKana === '' ||
      // userDetails.gender === '' ||
      userDetails.tel === '' ||
      userDetails.email === ''
    ) {
      alert('入力していない項目があります');
      return;
    }

    await axios
      .post('http://localhost:3010/customer/add', { userDetails })
      .then(() => window.location.replace(`http://localhost:3000/`));

    setUserDetails({
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      birthday: birthday || new Date(),
      // gender: '男性',
      tel: '',
      email: '',
      address: '',
      customerNote: '',
    });
    const genderCheckBox = document.querySelectorAll('genderChecked');
  };

  const handleRawChange = (e: any) => {
    const target = e.target as HTMLInputElement; // 型をアサーション(as)で修正
    const rawValue = target.value;
    if (!rawValue) {
      return;
    }
    console.log('ろーばりゅー', rawValue);

    const match = rawValue.match(/(\d{4})[年\/-]?(\d{1,2})[月\/-]?(\d{1,2})/);
    console.log('まっち', match);
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
    <form method="POST">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <NameForm>
            <label>
              名前：
              <input
                type="text"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="山田"
                value={userDetails.lastName}
                style={{ width: 250, height: 30 }}
              />
            </label>
          </NameForm>
          <NameForm>
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="太郎"
              value={userDetails.firstName}
              style={{ width: 250, height: 30 }}
            />
          </NameForm>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <KanaForm>
            <label>
              カナ：
              <input
                type="text"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, nameKana: e.target.value }))}
                placeholder="ヤマダ"
                value={userDetails.lastNameKana}
                style={{ width: 250, height: 30 }}
              />
            </label>
          </KanaForm>
          <KanaForm>
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, nameKana: e.target.value }))}
              placeholder="タロウ"
              value={userDetails.firstNameKana}
              style={{ width: 250, height: 30 }}
            />
          </KanaForm>
        </div>

        <BirthdayForm>
          <label>
            生年月日：
            <DatePicker
              locale="ja"
              selected={birthday}
              dateFormat="yyyy年MM月dd日"
              onChange={(date) => setBirthday(date)}
              onChangeRaw={handleRawChange}
              maxDate={NEW_DATE}
            />
          </label>
        </BirthdayForm>

        {/* <GenderForm>
          <label>
            性別：
            {genderItems.map((item, index) => (
              <label key={item.label}>
                <input
                  type="radio"
                  name="genderChecked"
                  // onChange={(e) => setUserDetails((prev) => ({ ...prev, gender: e.target.value }))}
                  value={item.value}
                  onChange={() => setUserDetails((prev) => ({ ...prev, gender: item.value }))}
                  style={{ width: 43, height: 28 }}
                  defaultChecked={item.value === '男性'}
                />
                {item.label}
              </label>
            ))}
          </label>
        </GenderForm> */}
        <TelephoneForm>
          <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'flex-end' }}>
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
            <label>
              Line：　　
              <input
                type="text"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, tel: e.target.value }))}
                placeholder="LineID"
                value={userDetails.tel}
                style={{ width: 250, height: 30 }}
              />
            </label>
            <label>
              Instagram：
              <input
                type="text"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, tel: e.target.value }))}
                placeholder="ユーザーID"
                value={userDetails.tel}
                style={{ width: 250, height: 30 }}
              />
            </label>
          </div>
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

        <CustomerNoteForm>
          <label>
            <div style={{ display: 'flex' }}>
              <div>備考欄：</div>
              <textarea
                rows={10}
                cols={50}
                placeholder="気になる部分・聞きたいこと"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, customerNote: e.target.value }))}
                value={userDetails.customerNote}
              />
            </div>
          </label>
        </CustomerNoteForm>

        <div>
          <RegistrationButton onClick={handleRegistration}>この内容で登録する</RegistrationButton>
        </div>
      </Container>
    </form>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 8% 8% 17% 8% 8% 25% 1fr;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: #efefef;
`;

const RegistrationButton = styled.div`
  cursor: pointer;
  background: #007bbb;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 3px;
  border: 0px;
  position: relative;
  box-shadow: 1px 1.6px 1px #000;
  font-weight: bold;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

const NameForm = styled.div`
  display: flex;
  align-items: center;
`;

const KanaForm = styled.div`
  display: flex;
  align-items: center;
`;

const BirthdayForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GenderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TelephoneForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddressForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomerNoteForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CustomerEntryPage;
