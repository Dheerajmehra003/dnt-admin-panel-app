import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import profile from '../../../../../public/assets/images/avatar/avatar-1.webp'

const Personal = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Grid container spacing={2} mt={1}>
      <Grid xs={12} md={6} paddingTop={2} paddingLeft={2}>
        <Card variant='outlined'>
          <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Personal Information
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
            <Box padding={3}>
            <Stack alignItems='center'>
              <img src={profile} height='70px' width='70px' />
            </Stack>
            </Box>
            <form>
              <Grid container>
                <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>First Name</Typography>
                <TextField fullWidth placeholder='First Name' />
                </Grid>
                <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Last Name</Typography>
                <TextField fullWidth placeholder='Last Name' />
                </Grid>
                <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Country</Typography>
                <TextField fullWidth placeholder='Location'  />
                </Grid>
                <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Zipcode</Typography>
                <TextField fullWidth placeholder='Zipcode' />
                </Grid>
                <Grid md={12} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Bio</Typography>
                <TextField fullWidth 
                multiline
                rows={3} placeholder='Bio'
                />
                </Grid>
                <Grid md={12} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Experience</Typography>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  fullWidth
                >
                  <MenuItem value={10}>Start up</MenuItem>
                  <MenuItem value={20}>6 Months</MenuItem>
                  <MenuItem value={30}>1 year</MenuItem>
                  <MenuItem value={40}>2 year</MenuItem>
                  <MenuItem value={50}>3 year</MenuItem>
                </Select>
                </Grid>
                </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} paddingTop={2} paddingLeft={2}>
        <Card variant='outlined'>
          <CardContent>
          <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Social Network
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
            <Stack rowGap={1}>
              <Box display='flex' justifyContent='space-between'>
                <Button sx={{color:'#03dbfc'}} startIcon={<TwitterIcon style={{backgroundColor:'#03dbfc', color:'white', padding:'2px'}} />}>Twitter</Button>
                <Button  sx={{color:'red'}}>Connect</Button>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Button sx={{color:'#052378'}} startIcon={<FacebookOutlinedIcon style={{backgroundColor:'#052378', color:'white', padding:'2px'}} />}>Facebook</Button>
                <Typography sx={{alignContent:'center', color:'#052378'}}>Anshan Handgun</Typography>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Button sx={{color:'#0d56a3'}} startIcon={<LinkedInIcon style={{backgroundColor:'#0d56a3', color:'white', padding:'2px'}} />}>linkedin</Button>
                <Button sx={{color:'red'}}>Connect</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{marginTop:'20px'}} variant='outlined'>
          <CardContent>
          <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Contact Information
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
            <form>
            <Grid container>
                <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>First Name</Typography>
                <TextField fullWidth placeholder='First Name' />
                </Grid>
                <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Email Address</Typography>
                <TextField fullWidth placeholder='Email address' id='email'/>
                </Grid>
                <Grid md={12} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'>Portfolio URL</Typography>
                <TextField fullWidth placeholder='Portfolio url' id='link'/>
                </Grid>
                <Grid md={12} xs={12} paddingTop={2} paddingLeft={2}>
                <Typography color='grey'> Address</Typography>
                <TextField fullWidth placeholder='Address' id='address' />
                </Grid>
              </Grid>
            </form>
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

export default Personal
