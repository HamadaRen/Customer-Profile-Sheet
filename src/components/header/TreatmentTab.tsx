import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TreatmentTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
}
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs  value={value} onChange={handleChange} centered>
        <Tab style={{position: 'relative', right: '42%', background: '#dcdddd', color: 'black',fontWeight: 'bold'}} label="エステサロン" />
        <Tab style={{position: 'relative', right: '42%', background: '#dcdddd', color: 'black', fontWeight: 'bold'}} label="ヘアサロン" />
      </Tabs>
    </Box>
  )
}

export default TreatmentTab
