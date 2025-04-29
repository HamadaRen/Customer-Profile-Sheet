import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ja } from 'date-fns/locale/ja';
import { apiPostCustomer } from '../../api/customer';
import { format } from 'date-fns';
import { Container } from '@mui/material';
import {
  NameForm,
  KanaForm,
  BirthdayForm,
  TelephoneForm,
  EmailForm,
  AddressForm,
  CustomerNoteForm,
  RegistrationButton,
} from '../../styles/customerEntry';

const NEW_DATE = new Date();

type UserDetailsType = {
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  birthday: string;
  // gender: string;
  tel: string;
  line: string;
  instagram: string;
  email: string;
  address: string;
};

const CustomerEntryPage = () => {
  const [birthday, setBirthday] = useState<Date | null>(new Date('2001-12-04'));
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    birthday: '',
    // gender: '男性',
    tel: '',
    line: '',
    instagram: '',
    email: '',
    address: '',
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

  const handleReset = () => {
    setUserDetails({
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      birthday: '',
      // gender: '男性',
      tel: '',
      line: '',
      instagram: '',
      email: '',
      address: '',
    });
  };

  //userDetailsを登録欄に表示したい
  const handleRegistration = async (e: { preventDefault: () => void }) => {
    // e.preventDefault();
    if (!birthday) {
      return;
    }
    // const StringBirthday = format(birthday, 'yyyy-MM-dd');

    //テスト時に空文字で送信したいのでコメントアウトしました
    // if (
    //   userDetails.lastName === '' ||
    //   userDetails.firstName === '' ||
    //   userDetails.lastNameKana === '' ||
    //   userDetails.firstNameKana === '' ||
    //   // userDetails.gender === '' ||
    //   userDetails.tel === '' ||
    //   userDetails.email === ''
    // ) {
    //   alert('入力していない項目があります');
    //   return;
    // }

    apiPostCustomer(userDetails,  () => {
      console.log('成功');
      handleReset();
    });
  };

  const handleRawChange = (e: any) => {
    const target = e.target as HTMLInputElement; // 型をアサーション(as)で修正
    const rawValue = target.value;
    if (!rawValue) {
      return;
    }

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
    <form method="POST">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <NameForm>
            <label>
              名前：
              <input
                type="text"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, lastName: e.target.value }))}
                placeholder="山田"
                value={userDetails.lastName}
                style={{ width: 250, height: 30 }}
              />
            </label>
          </NameForm>
          <NameForm>
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))}
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
                onChange={(e) => setUserDetails((prev) => ({ ...prev, lastNameKana: e.target.value }))}
                placeholder="ヤマダ"
                value={userDetails.lastNameKana}
                style={{ width: 250, height: 30 }}
              />
            </label>
          </KanaForm>
          <KanaForm>
            <input
              type="text"
              onChange={(e) => setUserDetails((prev) => ({ ...prev, firstNameKana: e.target.value }))}
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
                onChange={(e) => setUserDetails((prev) => ({ ...prev, line: e.target.value }))}
                placeholder="LineID"
                value={userDetails.line}
                style={{ width: 250, height: 30 }}
              />
            </label>
            <label>
              Instagram：
              <input
                type="text"
                onChange={(e) => setUserDetails((prev) => ({ ...prev, instagram: e.target.value }))}
                placeholder="ユーザーID"
                value={userDetails.instagram}
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

export default CustomerEntryPage;
