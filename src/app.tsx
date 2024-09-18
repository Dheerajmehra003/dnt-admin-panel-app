import 'src/global.css';

import Fab from '@mui/material/Fab';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

import { Iconify } from 'src/components/iconify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfileOnLoad } from './store/actions';


// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  const dispatch = useDispatch();

  useEffect(() => {
     // Fetch the user's profile on app load
    dispatch(fetchProfileOnLoad());
  }, [dispatch]);


  const githubButton = (
    <Fab
      size="medium"
      aria-label="Github"
      href="https://github.com/minimal-ui-kit/material-kit-react"
      sx={{
        zIndex: 9,
        right: 20,
        bottom: 20,
        width: 44,
        height: 44,
        position: 'fixed',
        bgcolor: 'grey.800',
        color: 'common.white',
      }}
    >
      <Iconify width={24} icon="eva:github-fill" />
    </Fab>
  );

  return (
    <ThemeProvider>
      <Router />
      {/* {githubButton} */}
    </ThemeProvider>
  );
}