import { Box, Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'; 
import Switch from '@mui/material/Switch';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 25,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 1,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

const MyAccount = () => {
  return (
    <>
    <Grid container mt={3}>
      <Grid md={12}>
       <Card variant='outlined'> 
        <CardContent>
        <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Personal Information
         </Typography>
         <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
         <form>
         <Grid container>
         <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
          <Typography color='grey'>Username</Typography>
          <TextField fullWidth placeholder='First Name' id='name' /> 
          </Grid>
          <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
          <Typography color='grey'>Account Email</Typography>
          <TextField fullWidth placeholder='Email' id='email' /> 
          </Grid>
         <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
          <Typography color='grey'>Language</Typography>
          <TextField fullWidth placeholder='Language' id='language' /> 
          </Grid>
          <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
          <Typography color='grey'>Signing Using</Typography>
          <TextField fullWidth placeholder='Sign in' /> 
          </Grid>
         </Grid>
         </form>
        </CardContent>
       </Card>
      </Grid>
      <Grid xs={12} md={6} paddingTop={3}>
       <Card variant='outlined'>
        <CardContent>
        <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Advanced Settings
         </Typography>
         <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
          <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography width='75%'>
            Secure Browsing
          <Typography color='grey' variant='body2'>Browsing Securely ( https ) when it's necessary</Typography>
          </Typography>
          <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
          <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography width='75%'>
          Login Notifications
          <Typography color='grey' variant='body2'>Notify when login attempted from other place</Typography>
          </Typography>
          <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
          <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography width='75%'>
          Login Approvals
          <Typography color='grey' variant='body2'>Approvals is not required when login from unrecognized devices.</Typography>
          </Typography>
          <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
        </CardContent>
       </Card>
      </Grid>
      <Grid xs={12} md={6} paddingTop={3} paddingLeft={{md:'20px'}}>
       <Card variant='outlined'>
        <CardContent>
        <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Recognized Devices
         </Typography>
         <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
          <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography width='60%'>
          Cent Desktop
          <Typography color='grey' variant='body2'>4351 Deans Lane, Chelmsford</Typography>
          </Typography>
          <Box display='flex' alignItems='center' columnGap='5px'>
            <Box sx={{bgcolor:'green'}} height='7px' width='7px' borderRadius='50%' />
            <Typography display={{xs:'none', md:'block'}} variant='body2'>Active 1 month ago</Typography>
          </Box>
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
          <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography width='60%'>
          Imho Tablet
          <Typography color='grey' variant='body2'>4185 Michigan Avenue</Typography>
          </Typography>
          <Box display='flex' alignItems='center' columnGap='5px'>
            <Box sx={{bgcolor:'grey'}} height='7px' width='7px' borderRadius='50%' />
            <Typography display={{xs:'none', sm:'none', md:'block'}} variant='body2' >Active 1 month ago</Typography>
          </Box>
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
          <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography width='60%'>
          Albs Mobile
          <Typography color='grey' variant='body2'>3462 Fairfax Drive, Montcalm</Typography>
          </Typography>
          <Box display='flex' alignItems='center' columnGap='5px'>
            <Box sx={{bgcolor:'grey'}} height='7px' width='7px' borderRadius='50%' />
            <Typography display={{xs:'none', md:'block'}} variant='body2'>Active 1 month ago</Typography>
          </Box>
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
        </CardContent>
       </Card>
      </Grid>
      <Grid xs={12} md={12} paddingTop={3}>
       <Card variant='outlined'>
        <CardContent>
        <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Active sessions
         </Typography>
         <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
         <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography fontWeight="600" fontSize="18px">
           Cent Desktop
          <Typography color='grey' variant='body2'>4351 Deans Lane, Chelmsford</Typography>
          </Typography>
          <Button>Logout</Button>
          </Box>
          <Divider sx={{marginBottom:"10px" , marginTop:"10px", }} />
         <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography fontWeight="600" fontSize="18px">
          Moon Tablet
          <Typography color='grey' variant='body2'>4185 Michigan Avenue</Typography>
          </Typography>
          <Button>Logout</Button>
          </Box>
        </CardContent>
       </Card>
      </Grid>
    </Grid>
    <Box display='flex' justifyContent='flex-end' columnGap={2} marginTop={2}>
      <Button variant='outlined'>Cancel</Button>
      <Button variant='contained'>Update Profile</Button>
    </Box>
    </>
  )
}

export default MyAccount