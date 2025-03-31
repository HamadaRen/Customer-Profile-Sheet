import React, { useState } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

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
  
    console.log('バリュー', value);
  
    const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
    };
  return (
    <Container>
      <Calendar>
        予約一覧
        <br />
        新規予約とれるようにもする
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

export default SalesManagement
