import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EstheticSalonSalesList from './EstheticSalonSalesList';
import HairSalonSalesList from './HairSalonSalesList';
import MonthlySales from './EstheticMonthlySales';
import WeeklySales from './EstheticWeeklySales';
import EstheticMonthlySales from './EstheticMonthlySales';
import HairMonthlySales from './HairMonthlySales';
import EstheticWeeklySales from './EstheticWeeklySales';
import HairWeeklySales from './HairWeeklySales';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

type SalesAryType = {
  id: string;
  customer_id: string;
  treatment_id: string;
  quantity_id: string;
  treatment_flag: string;
}

const SalesManagement = () => {
  const [value, setValue] = useState(0);
  const [salonValue ,setSalonValue] = useState(0)
  
  
    const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
    };

    const handleSalonChange = (event: any, newValue: any) => {
      setSalonValue(newValue);
    };


  return (
    <Container>
      <Calendar>
        <br />
        <NewReserveButton as={Link} to={'/sales/entry'}>予約作成</NewReserveButton>
        <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', background: '#dfdfdf', marginTop: '1%' }}>
        <Tabs value={salonValue} onChange={handleSalonChange} centered>

          <Tab
            style={{ position: 'relative', right: '38%', background: '#dcdddd', color: 'black', fontWeight: 'bold', borderRight: '1px solid #000', borderTop: '1px solid #000', borderBottom: '1px solid #000', borderLeft: '1px solid #000' }}
            label="エステサロン売上"
          />
          <Tab
            style={{ position: 'relative', right: '38%', background: '#dcdddd', color: 'black', fontWeight: 'bold', borderRight: '1px solid #000', borderTop: '1px solid #000', borderBottom: '1px solid #000' }}
            label="ヘアサロン売上"
          />
        </Tabs>
      </Box>
      <TabPanel value={salonValue} index={0}>
        <h3 style={{marginTop: 0}}>エステサロン</h3>
          <EstheticSalonSalesList />
      </TabPanel>
      <TabPanel value={salonValue} index={1}>
        <h3 style={{marginTop: 0}}>ヘアサロン</h3>
          <HairSalonSalesList />
      </TabPanel>
    </>
      </Calendar>

      
      <Sales>
      <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', background: '#dcdcdc' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            style={{ position: 'relative', right: '41%', background: '#dcdddd', color: 'black', fontWeight: 'bold', borderRight: '1px solid #000', borderTop: '1px solid #000', borderBottom: '1px solid #000', borderLeft: '1px solid #000' }}
            label="月売り上げ"
          />
          <Tab
            style={{ position: 'relative', right: '41%', background: '#dcdddd', color: 'black', fontWeight: 'bold', borderRight: '1px solid #000', borderTop: '1px solid #000', borderBottom: '1px solid #000' }}
            label="週売り上げ"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {salonValue === 0 ? <EstheticMonthlySales /> : <HairMonthlySales />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
        {salonValue === 0 ? <EstheticWeeklySales /> : <HairWeeklySales />}
        </div>
      </TabPanel>
    </>
      </Sales>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background: #efefef;
`
const Calendar = styled.div`
  position: relative;
  width: 100%;
  height: 77%;
  background: #dcdcdc;
`
const Sales = styled.div`
  background: #dcdcdc;
  width: 100%;
  height: 23%;
`

const NewReserveButton = styled.div`
  background: #192f60;
  position: relative;
  right: 43%;
  width: 10%;
  cursor: pointer;
  text-decoration: dashed;
  color: #fff;
  padding: 1% 3%;
  border-radius: 3%;
  font-weight: bold;
  &:hover {
  background: #bbc8e6;
  color: #000;
  border: 1px solid '#192f60';
}
`

export default SalesManagement
