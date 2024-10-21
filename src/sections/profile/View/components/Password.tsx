import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography
  } from '@mui/material';
  import React from 'react';
  import FormControl from '@mui/material/FormControl';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
  import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
  
  const Password = () => {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event:any) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event:any) => {
      event.preventDefault();
    };
  
    const passwordDetail = [
      {
        title: 'At least 8 characters'
      },
      {
        title: 'At least 1 lower letter (a-z)'
      },
      {
        title: 'At least 1 uppercase letter (A-Z)'
      },
      {
        title: 'At least 1 number (0-9)'
      },
      {
        title: 'At least 1 special characters'
      },
    ]
  
    return (
      <>
      <Box mt={3}>
        <Card variant='outlined'>
        <CardContent>
                <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
                  Change Password
                </Typography>
                <Divider sx={{ marginBottom: '10px', marginTop: '20px' }} />     
                <Grid container>
                  <Grid md={6} xs={12}>
                  <Stack>
                  <Grid md={12} xs={12} paddingTop={2} paddingLeft={2} pb={2}>
                    <Typography width="100%" color="grey">Old Password</Typography>
                    <FormControl sx={{ mt: 1, width: '90%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid md={12} xs={12} paddingTop={2} paddingLeft={2} pb={2}>
                    <Typography color="grey">New Password</Typography>
                    <FormControl sx={{ mt: 1, width: '90%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid md={12} xs={12} paddingTop={2} paddingLeft={2} pb={2}>
                    <Typography color="grey">Confirm Password</Typography>
                    <FormControl sx={{ mt: 1, width: '90%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                               {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  </Stack>
                  </Grid>
                  <Grid md={6} pl={3} pt={2}>
                   <Box p={3}>
                   <Typography fontWeight='600' fontSize='16px' mb={1}>
                    New Password must contain:
                   </Typography>
                   {
                    passwordDetail.map((item, index)=>{
                      return (
                        <>
                        <Box display='flex' alignItems='center' columnGap='10px' p={1}>
                          <ArrowRightAltIcon />
                          <Typography width='100%' key={index}>{item.title}</Typography>
                        </Box>
                        <Divider />
                        </>
                      )
                    })
                   }
                    </Box>
                  </Grid>
                </Grid>     
        <Box display="flex" justifyContent="flex-end" columnGap={2} marginTop={2}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Update Profile</Button>
        </Box>
        </CardContent>
       </Card>
       </Box>
      </>
    );
  };
  
  export default Password;
  