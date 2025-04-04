import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const SalesManagement = () => {
  const [value, setValue] = useState(0);
  
    const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
    };

    const getSalesId = async () => {
      const salesData = await axios.get('http://localhost:3010/sales')
      const treatmentDetail = salesData.data
      console.log('ゲットした売上id', treatmentDetail)
    }

    useEffect(() => {
      getSalesId()
    },[])
  return (
    <Container>
      <Calendar>
        <br />
        <NewReserveButton as={Link} to={'/sales/entry'}>予約作成</NewReserveButton>
        <br />
        予約一覧
      </Calendar>
      <Sales>
      <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            style={{ position: 'relative', right: '41.1%', background: '#dcdddd', color: 'black', fontWeight: 'bold', borderRadius: 10 }}
            label="月売り上げ"
          />
          <Tab
            style={{ position: 'relative', right: '41%', background: '#dcdddd', color: 'black', fontWeight: 'bold', borderRadius: 5 }}
            label="週売り上げ"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          月売り上げ
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          週売り上げ
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
  height: 57%;
  background: red;
`
const Sales = styled.div`
  background: lightblue;
  width: 100%;
  height: 43%;
`

const NewReserveButton = styled.div`
  background: blue;
  position: relative;
  right: 40%;
  width: 10%;
  cursor: pointer;
  text-decoration: dashed;
  color: inherit;
  padding: 1% 5%;
  border-radius: 3%;
  font-weight: bold;
  box-shadow: 1px 1.6px 1px #000;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`

export default SalesManagement
