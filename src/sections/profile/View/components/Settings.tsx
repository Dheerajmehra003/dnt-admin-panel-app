import { Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemText, ListSubheader, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'; 
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';

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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const listOne = [
  {
    title: 'Email Notification',
    icon: <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  },
  {
    title: 'Send Copy To Personal Email',
    icon: <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
  }
]

const listTwo = [
  {
    title: 'News about PCT-themes products and feature updates',
    icon:   <Checkbox {...label} defaultChecked />
  },
  {
    title: 'Tips on getting more out of PCT-themes',
    icon:   <Checkbox {...label} defaultChecked />
  },
  {
    title: 'Things you missed since you last logged into PCT-themes',
    icon:   <Checkbox {...label}  />
  },
  {
    title: 'News about products and other services',
    icon:   <Checkbox {...label} />
  },
  {
    title: 'Tips and Document business products',
    icon:   <Checkbox {...label} />
  },
]

const listThree = [ 
  {
    title: 'Have new notifications',
    icon: <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  },
  {
    title: "You're sent a direct message",
    icon: <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
  },
  {
    title: 'Someone adds you as a connection',
    icon: <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  },
]

const listFour = [
  {
    title: 'Upon new order',
    icon: <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  },
  {
    title: 'New membership approval',
    icon: <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
  },
  {
    title: 'Member registration',
    icon: <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  },
]

const Settings = () => {
  return (
     <>
     <Grid container mt={1}>
      <Grid xs={12} md={6} pt={2}>
          <Stack spacing={3}>
          <Grid xs={12} md={12}>
           <Card variant='outlined'>
              <CardHeader title='Email Settings' />
              <Divider />
             <CardContent>
              <Stack>
              <Typography variant='h5'>Setup Email Notification</Typography>
              {
                listOne.map((item, index)=>{
                  return (
                    <List>
                    <ListItem sx={{display:'flex', gap:'10px'}} disablePadding>
                     <ListItemText sx={{color:'grey'}}>{item.title}</ListItemText>
                     {item.icon}
                    </ListItem>
                   </List>
                  )
                })
              }
              </Stack>
             </CardContent>
           </Card>
          </Grid>
          <Grid xs={12} md={12}>
           <Card variant='outlined'>
           <CardHeader title='Updates from System Notification' />
              <Divider />
             <CardContent>
              <Stack>
              {
                listTwo.map((item, index)=>{
                  return (
                    <List>
                    <ListItem sx={{display:'flex', gap:'10px'}} disablePadding>
                    <ListItemText sx={{color:'grey'}}>{item.title}</ListItemText>
                     {item.icon}
                    </ListItem>
                   </List>
                  )
                })
              }
              </Stack>
             </CardContent>
           </Card>
          </Grid>
          </Stack>  
      </Grid>
      <Grid xs={12} md={6} pt={2} pl={{md:'20px'}}>
        <Card>
          <CardHeader title='Activity Related Emails' />
          <CardContent>
          <Stack>
          <Typography variant='h5'>When to email?</Typography>
          {
                listThree.map((item, index)=>{
                  return (
                    <List>
                    <ListItem sx={{display:'flex', gap:'10px'}} disablePadding>
                     <ListItemText sx={{color:'grey'}}>{item.title}</ListItemText>
                     {item.icon}
                    </ListItem>
                   </List>
                  )
                })
              }
              <Divider sx={{mt:'10px', mb:'20px'}} />
              <Typography variant='h5'>When to escalate emails?</Typography>
              {
                listFour.map((item, index)=>{
                  return (
                    <List>
                    <ListItem sx={{display:'flex', gap:'10px'}} disablePadding>
                     <ListItemText sx={{color:'grey'}}>{item.title}</ListItemText>
                     {item.icon}
                    </ListItem>
                   </List>
                  )
                })
              }
            </Stack>
          </CardContent>
        </Card>
      </Grid>
     </Grid>
     </>
  )
}

export default Settings