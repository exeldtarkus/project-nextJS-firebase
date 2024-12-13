import React from 'react';
import LoginForm from '../../components/LoginForm';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <LoginForm />
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Don&apos;t have an account?{' '}
        <Link href="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
          Register
        </Link>
      </Typography>
    </Box>
  );
}
