import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

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
  const [estheticSales, setEstheticSales] = useState<SalesAryType[]>([]);
  const [accountingAry, setAccountingAry] = useState<number[]>([])

  const getSalesId = async () => {
    const salesData = await axios.get('http://localhost:3010/sales/hair/RangeSpecification');
    const treatmentDetail = salesData.data;
    setEstheticSales(treatmentDetail);
  };

  const calculation = () => {
    estheticSales.map((item) => {
      const treatmentPrice = (item.treatment_price) * (Number(item.quantity_id));
      // const quantity = item.quantity_id;
      // const test = treatmentPrice * Number(quantity)
      console.log('@@@@@@@@@@@@', treatmentPrice)
      setAccountingAry((accountingAry) => [...accountingAry, treatmentPrice]);
    })
  }

  useEffect(() => {
    getSalesId()
  },[])

  useEffect(() => {
    calculation()
  },[estheticSales])

  console.log('日程指定', estheticSales)
  console.log('計算結果', accountingAry)


  return (
    <MonthlySalesList>
      ヘアサロン月間売上　:　
      {accountingAry.reduce(function (sum, element) {
        return sum + element;
      }, 0) + '円'}
    </MonthlySalesList>
  )
}

const MonthlySalesList = styled.div`
  width: 100%;
  height: 100%;
  font-size: 200%;
`

export default HairMonthlySales
