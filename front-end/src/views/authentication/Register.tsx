 
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Stack } from '@mui/material';

import PageContainer from 'src/components/container/PageContainer';
import img1 from 'src/assets/images/fossbot/back_top_up.png';
import img2 from 'src/assets/images/fossbot/gfoss_en.png';
import Logo from 'src/layouts/full/shared/logo/Logo';

import AuthRegister from './AuthRegister';

const Register = () => (
  <PageContainer title="Register" description="this is Register page">
    <Grid container spacing={0} justifyContent="center" sx={{ overflowX: 'hidden' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={7}
        xl={8}
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Box position="relative">
          <Box px={3}>
            <Logo />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            height={'calc(100vh - 75px)'}
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
              flexDirection: 'column',
            }}
          >
            <img
              src={img2}
              alt="bg"
              style={{
                width: '100%',
                maxWidth: '400px',
              }}
            />
            <img
              src={img1}
              alt="bg"
              style={{
                width: '100%',
                maxWidth: '1000px',
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={5}
        xl={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box p={4}>
          <AuthRegister
            title="Welcome to FOSSBot-Platform"
            subtext={
              <Typography variant="subtitle1" color="textSecondary" mb={1}>
                Robotics, Coding, Creativity. All in one place.
              </Typography>
            }
            subtitle={
              <Stack direction="row" spacing={1} mt={3}>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  Already have an Account?
                </Typography>
                <Typography
                  component={Link}
                  to="/auth/login"
                  fontWeight="500"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Sign In
                </Typography>
              </Stack>
            }
          />
        </Box>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Register;