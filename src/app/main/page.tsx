/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'; // Mark this component as a client component

import React, { useState } from 'react';
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { fetchUsers, IUser } from '@/apis/userApi';

const MainPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const data: any = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    router.push('/login');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Main Page</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Welcome Message */}
      <Typography variant="h3" style={{ margin: '20px 0' }}>
        Welcome to the Main Page
      </Typography>

      {/* Fetch User Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleFetchUser}
        disabled={loading}
        style={{ marginBottom: '20px' }}
      >
        {loading ? 'Fetching...' : 'Fetch User Data'}
      </Button>

      {/* Error Message */}
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}

      {/* User Table */}
      {users.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Age</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={`${user.id}-${index}`}> {/* Ensure unique keys */}
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default MainPage;
