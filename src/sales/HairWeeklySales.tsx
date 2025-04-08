import React, { useEffect, useState } from 'react';
import { newDate } from 'react-datepicker/dist/date_utils';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ja } from 'date-fns/locale/ja';
import axios from 'axios';

const NEW_DATE = new Date();

type SalesAryType = {
  id: string;
  treatment_id: string;
  treatment_name: string;
  treatment_price: number;
  quantity_id: string;
  treatment_flag: string;
  created_at: Date;
};

registerLocale('ja', ja);

const HairWeeklySales = () => {
  const [estheticSales, setEstheticSales] = useState<SalesAryType[]>([]);
  const [schedule, setSchedule] = useState<Date | null>(new Date());
  const [accountingAry, setAccountingAry] = useState<number[]>([]);

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
        setSchedule(newDate);
        console.log('hakka')
      }
    }
  };

  const handleClick = async () => {
    if (schedule === null) {
      return;
    }
    const year = schedule.getFullYear().toString().padStart(4, '0');
    const month = (schedule.getMonth() + 1).toString().padStart(2, '0');
    const day = schedule.getDate().toString().padStart(2, '0');
    const dateParams = year + month + day;
    const test = await axios.get(`http://localhost:3010/sales/hair/weeklyRange/${dateParams}`);
    const salesData = test.data
    setEstheticSales(salesData)
  };

  const calculation = () => {
    estheticSales.map((item) => {
      const treatmentPrice = item.treatment_price * Number(item.quantity_id);
      console.log('/////////////////////////////', item)
      // const quantity = item.quantity_id;
      // const test = treatmentPrice * Number(quantity)
      setAccountingAry((accountingAry) => [...accountingAry, treatmentPrice]);
    });
  };


  useEffect(() => {
    handleClick();
  }, [schedule]);

  useEffect(() => {
      calculation();
    }, [estheticSales]);

  // console.log('選択した日付', accountingAry);

  return (
    <>
      <ScheduleForm>
        <DatePicker
          locale="ja"
          selected={schedule}
          dateFormat="yyyy年MM月dd日"
          onChange={(date) => setSchedule(date)}
          //onChangeRawで手入力時の処理を走らせる関数を呼び出す
          onChangeRaw={handleRawChange}
          // onChange={(e) => setUserDetails((prev) => ({ ...prev, birthday: birthday }))}
          maxDate={NEW_DATE}
        />
      </ScheduleForm>
      <MonthlySalesList>
        ヘア週間売り上げ　:　
        {accountingAry.reduce(function (sum, element) {
        return sum + element;
      }, 0).toLocaleString() + '円'}
      </MonthlySalesList>
    </>
  );
};

const MonthlySalesList = styled.div`
  width: 100%;
  height: 100%;
  font-size: 200%;
`;

const ScheduleForm = styled.div`
  position: relative;
  right: 41%;
`;

export default HairWeeklySales;
