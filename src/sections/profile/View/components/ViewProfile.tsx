import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';


import { Iconify } from 'src/components/iconify';
import { Card, Divider, Grid, List, Stack } from '@mui/material';
import { CardContent } from '@mui/material';
import { ListItem } from '@mui/material';
import profile from '../../../../../public/assets/images/avatar/avatar-1.webp'

// ----------------------------------------------------------------------

export function ViewProfile() {

  const ProfileInfo = [
    {
      title:'anshan.dh81@gmail.com',
      icon:<MailOutlineIcon />
    },
    {
      title:'(+1-876) 8654 239 581',
      icon:<PhoneOutlinedIcon />
    },
    {
      title:'New York',
      icon:<FilterCenterFocusIcon />
    },
    {
      title:'https---link',
      icon:<MailOutlineIcon />
    },
  ]

  const skillsInfo = [
    {
      skill: 'Junior',
      percent: '30%',
      // pixel: '35px'
    },
    {
      skill: 'UX Reasearcher',
      percent: '80%',
      // pixel: '80px'
    },
    {
      skill: 'Wordpress',
      percent: '90%',
      // pixel: '60px'
    },
    {
      skill: 'HTML',
      percent: '30%',
      // pixel: '35px'
    },
    {
      skill: 'Graphic Design',
      percent: '95%',
      // pixel: '100px'
    },
    {
      skill: 'Code Style',
      percent: '75%',
      // pixel: '80px'
    },
  ]

  const personalDetailInfo = [
    {
      title: 'Full Name',
      info: 'Anshan Handgun',
      title2: 'Father Name',
      info2: 'Mr Deepen Handgun'
    },
    {
      title: 'Phone',
      info: '(+1-876) 8654 239 581',
      title2: 'Country',
      info2: 'New York'
    },
    {
      title: 'Email',
      info: 'anshan.dh81@gmail.com',
      title2: 'Zip Code',
      info2: '956 754'
    },
    {
      title: 'Address',
      info: 'Street 110-B Kalians Bag, Dewan, M.P. New York',
    },
   
  ]


  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2} >
          <Card variant='outlined'>
            <CardContent>
            <Stack direction='row' justifyContent='flex-end'>
              <Box 
                 display='inline-flex'
                 bgcolor='blue'
                 px='10px' py='2px'
                 color='white'
                 borderRadius='4px'
                 justifyContent='center'
                 alignItems='center'
               >
                  <Typography>Pro</Typography>
                </Box>
                </Stack>
                <Stack alignItems='center'>
                <img src={profile} height='70px' width='70px' />
                <Typography variant='h5' align='center' marginTop="20px">
                    Anshan H.
                    <Typography variant='body2' color='grey'>
                     Project Manager
                    </Typography>
                </Typography>
                </Stack>
                <Divider sx={{mt:'20px'}} />
                <Stack direction='row' justifyContent={{md:'space-between'}} 
                spacing={1} marginTop="20px" mb="20px" px='20px'>
                <Typography variant='h5' align='center' marginTop="20px">
                    86
                    <Typography  color='grey'>
                        Post
                    </Typography>
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant='h5' align='center' marginTop="20px">
                    40
                    <Typography  color='grey'>
                    Project
                    </Typography>
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant='h5' align='center' marginTop="20px">
                    4.5k
                    <Typography  color='grey'>
                        Members
                    </Typography>
                </Typography>
                </Stack>
                <Divider sx={{mb:'20px'}}/>
                {
                  ProfileInfo.map((item, index)=>{
                    return (
                      <Box 
                      key={index}
                      display='flex'
                      justifyContent='space-between'
                      px='10px'
                      py='4px'
                      alignItems='center'>
                       {item.icon}
                       <Typography>{item.title}</Typography>
                     </Box>
                    )
                  })
                }
            </CardContent>
          </Card>
          <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
                Skills
                </Typography>
                <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
                {
                  skillsInfo.map((item, index) => {
                    return (
                      <Box key={index} display='flex' justifyContent='space-between' pt='10px' pl='10px'>
                      <Typography width="100%" color='grey'>{item.skill}</Typography>
                      <Box display='flex' alignItems='center' gap='6px' >
                        <Box height='10px' width={{xs:'60px',md:'90px', sm:'70'}}>
                        <Box height='5px' width='100%' borderRadius='5px' bgcolor='#a2d7fa'/>
                        {/* <Box position='absolute' bgcolor='blue' sx={{width:`${item.pixel}`}} height='5px' borderRadius='5px' /> */}
                        </Box>
                        <Typography>{item.percent}</Typography>
                      </Box>
                    </Box>
                    )
                  })
                }
            </CardContent>
          </Card>

          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
        <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
                About me
                </Typography>
                <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
                <Typography color='grey' pl={1} pr={2}>Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website,
                   I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.</Typography>

            </CardContent>
          </Card>
        <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
               Personal Details
              </Typography>
              <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
              <Box pl='10px' pt='15px' >
                {
                  personalDetailInfo.map((item, index)=>{
                    return ( 
                       <List sx={{py:'5px', px:'15px'}}>
                        <ListItem key={index} disablePadding>
                          <Grid container >
                            <Grid item md={6} sm={12} xs={12}>
                            <Typography color='grey'>{item.title}</Typography>
                            <Typography>{item.info}</Typography>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <Typography color='grey'>{item.title2}</Typography>
                            <Typography>{item.info2}</Typography>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <Divider sx={{mt:'5px'}}/>
                        </List>
                    )
                  })
                }   
              </Box>
            </CardContent>
          </Card>
        <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
               Education
              </Typography>
              <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
              <List>
                <ListItem>
                  <Grid container >
                    <Grid md={6} xs={12} >
                      <Typography color='grey'>Master Degree (Year)</Typography>
                      <Typography>2014-2017</Typography>
                    </Grid>
                      <Grid md={6} xs={12} >
                     <Typography color='grey'>Institute</Typography>
                     <Typography>-</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                  <Divider />
                <ListItem>
                <Grid container >
                <Grid md={6} xs={12} >
                  <Typography color='grey'>Bachelor (Year)</Typography>
                  <Typography>2011-2013</Typography>
                  </Grid>
                    <Grid md={6} xs={12} >
                  <Typography color='grey'>Institute</Typography>
                  <Typography>Imperial College London</Typography>
                  </Grid>
                  </Grid>
                </ListItem>
                  <Divider />
                <ListItem>
                <Grid container >
                  <Grid md={6} xs={12} >
                   <Typography color='grey'>School (Year)</Typography>
                   <Typography>2009-2011</Typography>
                  </Grid>
                  <Grid md={6} xs={12} >
                   <Typography color='grey'>Institute</Typography>
                   <Typography>School of London, England</Typography>
                  </Grid>
                </Grid>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
               Emplyment
              </Typography>
              <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
              <List>
                <ListItem>
                <Grid container>
                   <Grid md={6} xs={12} >
                   <Typography color='grey'>Senior UI/UX designer (Year)</Typography>
                   <Typography>2019-Current</Typography>
                  </Grid>
                  <Grid md={6} xs={12} >
                    <Typography color='grey'>Job Responsibility</Typography>
                    <Typography>Perform task related to project manager with the 100+ team
                     under my observation. Team management is key role 
                     in this company.</Typography>
                  </Grid>
                </Grid>
                </ListItem>
                  <Divider />
                <ListItem>
                  <Grid container>
                   <Grid md={6} xs={12} >
                  <Typography color='grey'>Trainee cum Project Manager (Year)</Typography>
                  <Typography>2017-2019</Typography>
                  </Grid>
                    <Grid md={6} xs={12} >
                  <Typography color='grey'>Job Responsibility</Typography>
                  <Typography>Team management is key role in this company.</Typography>
                  </Grid>
                  </Grid>
                </ListItem>
                  </List>
            </CardContent>
          </Card>
          </Stack>
        </Grid>
      </Grid>
      </>
  );
}
