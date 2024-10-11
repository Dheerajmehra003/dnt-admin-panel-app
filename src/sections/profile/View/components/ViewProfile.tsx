import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';


import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ViewProfile() {


  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={4} sx={{bgcolor: 'black'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box>
                    sdgdf
                </Box>

            </Box>
        </Grid>

        <Grid xs={12} md={6} lg={8} sx={{bgcolor: 'white'}}>
        Personal Task
        </Grid>
      </Grid>
      </>
  );
}
