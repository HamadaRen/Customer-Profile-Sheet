import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import TreatmentMenuList from '../treatment/EstheSalonTreatmentMenuList';
import HairSalonTreatMenuList from '../treatment/HairSalonTreatmentMenuList';

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

const TreatmentTab = () => {
  const [value, setValue] = useState(0);

  console.log('バリュー', value);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            style={{ position: 'relative', right: '42%', background: '#dcdddd', color: 'black', fontWeight: 'bold' }}
            label="エステサロン"
          />
          <Tab
            style={{ position: 'relative', right: '42%', background: '#dcdddd', color: 'black', fontWeight: 'bold' }}
            label="ヘアサロン"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
        <TreatmentMenuList />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
        <HairSalonTreatMenuList />
        </div>
      </TabPanel>
    </>
  );
};

export default TreatmentTab;
