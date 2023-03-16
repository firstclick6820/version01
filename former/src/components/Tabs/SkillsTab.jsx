import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Tabs,
  Tab,
  Grid,
  Typography,
  Box
}
from '@mui/material'
import { styled } from '@mui/material/styles';


import SoftSkillsCard from '../Cards/SoftSkillsCard';
import TechnicalSkillsCard from '../Cards/TechnicalSkillsCard';


// import data
import { 
  frontendSkills, 
  backendSkills, 
  softSkills,
  generalSkills
} from '../../assets/constant/data';


export default function SkillsTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

        <CustomTabs value={value} onChange={handleChange} aria-label="Skills Tab Panel" centered>
          <CustomTab label="Soft Skills" {...a11yProps(0)} />
          <CustomTab label="Technical Skills" {...a11yProps(1)} />
          <CustomTab label="Languages" {...a11yProps(2)} />
          <CustomTab label="Courses" {...a11yProps(3)} />
        </CustomTabs>


      </Box>


      <TabPanel value={value} index={0}>
          

          <Grid container spacing={1}>
            <Grid item  xs={12} sm={6}>
            {softSkills && <SoftSkillsCard title="Soft Skills" skills={softSkills} /> }
            </Grid>

            <Grid item  xs={12} sm={6}>
              {generalSkills && <TechnicalSkillsCard title="General Skills" skills={generalSkills} /> }
            </Grid>
        </Grid>
      </TabPanel>


      <TabPanel value={value} index={1}>
        <Grid container spacing={1}>
          <Grid item  xs={12} sm={6}>
            {frontendSkills && <TechnicalSkillsCard title="Frontend Skills" skills={frontendSkills} /> }
          </Grid>

          <Grid item  xs={12} sm={6}>
            {backendSkills && <TechnicalSkillsCard title="Backend Skills" skills={backendSkills} /> }
          </Grid>
        </Grid>
      </TabPanel>
      


      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}






function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <CustomTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`Skills-Tab-Panel-${index}`}
      aria-labelledby={`Skills-Tab-Panel-${index}`}
      {...other}>

      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </CustomTabPanel>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



function a11yProps(index) {
  return {
    id: `Skills-Tab-Panel-${index}`,
    'aria-controls': `Skills-Tab-Panel-${index}`,
  };
}



const CustomTabs = styled(Tabs)({

})


const CustomTab = styled(Tab)({
  color: '#FFEBEE',
  '&.Mui-selected': {
    color: "#fd1d1d",
    
  }
 

})


const CustomTabPanel = styled('div')({
  backgroundImage: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
  color: '#FFEBEE',
  borderRadius: '0.2em'
})