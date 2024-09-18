import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { RootState } from 'src/store/reducers';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import { ProtectedRoute } from './components';


// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const PatientPage = lazy(() => import("src/pages/Patient/Patient"));
export const DoctorPage = lazy(() => import("src/pages/Doctor"));
export const ProfilePage = lazy(() => import("src/pages/Profile/Profile"));
// export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/auth/sign-in'));
export const SignUpPage = lazy(() => import("src/pages/auth/sign-up"));
// export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/Error/page-not-found'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  const { isLoggedIn, loading } = useSelector((state: RootState) => state.LoginReducer);
    console.log("isLoggedIn: ", isLoggedIn);

  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: (
            // <ProtectedRoute>
              <HomePage />
            // </ProtectedRoute>
          ), index: true },
        { 
          path: 'patient', 
          element: (
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <PatientPage />
              </ProtectedRoute>
            ) 
           },
        { 
          path: 'doctor', 
          element: ( 
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DoctorPage />
              </ProtectedRoute>
            )
         },
        { 
          path: 'profile/:id', 
          element: ( 
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ProfilePage />
            </ProtectedRoute>
          )
        },
        {
          path: 'patient-approval',
          element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PatientPage />
            </ProtectedRoute>
          ) 
        },
        { 
          path: 'doctor-approval', 
          element: ( 
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DoctorPage />
              </ProtectedRoute>
            )
         },
        // { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      element: (
        <AuthLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </AuthLayout> 
      ),
      children: [
         {
          path: 'sign-in',
          element: (
          
            <ProtectedRoute isLoggedIn={!isLoggedIn} redirect='/'>
              <SignInPage />
            </ProtectedRoute> 
          ),
        },
        {
          path: 'sign-up',
          element: (
            <ProtectedRoute isLoggedIn={!isLoggedIn} redirect='/'>
              <SignUpPage />
            </ProtectedRoute>
          ),
        },
      ]
    },
    // {
    //   path: 'sign-in',
    //   element: (
       
    //     <AuthLayout>
    //       <SignInPage />
    //     </AuthLayout> 
    //   ),
    // },
    // {
    //   path: 'sign-up',
    //   element: (
    //     <AuthLayout>
    //       <SignUpPage />
    //     </AuthLayout>
    //   ),
    // },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}