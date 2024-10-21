import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import MainCard from 'src/layouts/components/Profile/components/MainCard';
import { CardContent, Grid, Tab, Tabs, Toolbar } from '@mui/material';
import { SettingsOutlined, VerifiedOutlined } from '@mui/icons-material';
import { a11yProps } from 'src/utils/helper';
import { TabPanel } from 'src/layouts/components/Profile/components/Util';

import { ViewProfile } from './components/ViewProfile';
import Personal from './components/Personal';
import MyAccount from './components/MyAccount';
import Password from './components/Password';
import Settings from './components/Settings';

// ----------------------------------------------------------------------

export function ProfileView() {
  const theme:any = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography  color="textSecondary" variant="h6" sx={{ textDecoration: 'none' }}>
                  Home
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                  Account Profile
                </Typography>
              </MuiBreadcrumbs>
            </Grid>
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h5">Basic Account</Typography>
              </Grid>
          </Grid>
      </Box>
      

      {/* <MainCard elevation={0} border={false} content={false}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
        <MainCard border >
        {/* <Typography variant="body2"> */}
          <Tabs 
            // variant="fullWidth"  
            value={value} 
            onChange={handleChange} 
            aria-label="profile tabs"
          >
            <Tab
              sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textTransform: 'capitalize'
                }}
                icon={<VerifiedOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                label="Profile"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textTransform: 'capitalize'
                        }}
                        icon={<VerifiedOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                        label="Personal"
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textTransform: 'capitalize'
                        }}
                        icon={<VerifiedOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                        label="My Account"
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textTransform: 'capitalize'
                        }}
                        icon={<VerifiedOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                        label="Change Password"
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textTransform: 'capitalize'
                        }}
                        icon={<SettingsOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                        label="Setting"
                        {...a11yProps(1)}
                      />
                    </Tabs>
                  {/* </Box> */}
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <ViewProfile />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    {/* <SettingTab data={settingData} handleClosePopover={handleClosePopover} /> */}
                        <Personal />
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <MyAccount />
                  </TabPanel>
                  <TabPanel value={value} index={3} dir={theme.direction}>
                    <Password />
                  </TabPanel>
                  <TabPanel value={value} index={4} dir={theme.direction}>
                    <Settings />
                  </TabPanel>
                </MainCard>
    </DashboardContent>
  );
}
