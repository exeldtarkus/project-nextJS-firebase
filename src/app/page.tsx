'use client'; // Mark this as a client component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/main');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Frontend Repo</h1>
      <p>You need to login to access the main page.</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => router.push('/login')}
      >
        Go to Login
      </button>
    </div>
  );
}
