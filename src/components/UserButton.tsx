/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button, Typography, CircularProgress } from '@mui/material';
import { fetchUsers } from '../apis/userApi';

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const UserButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  const handleFetchUser = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchUsers();
      setUser(data);
    } catch (err) {
      console.log('err :>> ', err);
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleFetchUser} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Fetch User Data'}
      </Button>
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {user && (
        <Typography sx={{ mt: 2 }}>
          User: {JSON.stringify(user, null, 2)}
        </Typography>
      )}
    </div>
  );
};

export default UserButton;
