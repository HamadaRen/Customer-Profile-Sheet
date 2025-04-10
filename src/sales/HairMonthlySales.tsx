import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import { Box } from '@mui/material';

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

const HairMonthlySales = () => {
  const [hairSales, setHairSales] = useState<SalesAryType[]>([]);
  const [accountingAry, setAccountingAry] = useState<number[]>([]);
  const [schedule, setSchedule] = useState<Date | null>(new Date());
  const [monthlyTotal, setMonthTotal] = useState<number>(NaN);

  const handleClick = async () => {
    setAccountingAry([])
    if (schedule === null) {
      return;
    }
    const year = schedule.getFullYear().toString().padStart(4, '0');
    const month = (schedule.getMonth() + 1).toString().padStart(2, '0');
    const monthParams = year + month;
    const salesData = await axios.get(`http://localhost:3010/sales/hair/RangeSpecification/${monthParams}`);
    const treatmentDetail = salesData.data;
    setHairSales(treatmentDetail);
  };

  const handleRawChange = (e: any) => {
    const target = e.target as HTMLInputElement; // 型をアサーション(as)で修正
    const rawValue = target.value;
    if (!rawValue) {
      return;
    }

    const match = rawValue.match(/(\d{4})[年\/-]?(\d{1,2})[月\/-]/);
    if (match) {
      const year = parseInt(match[1]);
      const month = parseInt(match[2]) - 1;
      const day = parseInt(match[3]);
      const newDate = new Date(year, month, day);

      if (!isNaN(newDate.getTime())) {
        setSchedule(newDate);
      }
    }
  };

  const calculation = () => {
    if(hairSales.length === 0){
      setAccountingAry([])
      return;
    }
    hairSales.map((item) => {
      const treatmentPrice = item.treatment_price * Number(item.quantity_id);
      // const quantity = item.quantity_id;
      // const test = treatmentPrice * Number(quantity)
      setAccountingAry((accountingAry) => [...accountingAry, treatmentPrice]);
    });
  };

  useEffect(() => {
      handleSum();
    }, []);

  useEffect(() => {
    handleClick();
  }, [schedule]);

  useEffect(() => {
    calculation();
  }, [hairSales]);

  useEffect(() => {
      handleSum();
    }, [accountingAry]);

  const handleSum = () => {
    setMonthTotal(hairSales.length === 0 ? 0 : accountingAry.reduce((sum, element) => sum + element, 0));
  };

  return (
    <>
    <ScheduleForm>
        <Box>
          <ReactDatePicker
            showMonthYearPicker
            locale="ja"
            selected={schedule}
            dateFormat="yyyy年MM月"
            onChange={(date) => {
              setSchedule(date);
            }}
            //onChangeRawで手入力時の処理を走らせる関数を呼び出す
            onChangeRaw={handleRawChange}
            // onChange={(e) => setUserDetails((prev) => ({ ...prev, birthday: birthday }))}
            maxDate={NEW_DATE}
          />
        </Box>
      </ScheduleForm>
    <MonthlySalesList>
      ヘアサロン月間売上　:　
      {monthlyTotal.toLocaleString() + '円'}
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

export default HairMonthlySales;
