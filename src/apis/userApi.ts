import axios from 'axios';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8089/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'qwerty123'
  },
});

export const fetchUsers = async (): Promise<IUser> => {
  const response = await apiClient.get<IUser>(`/fetch-user-data`);
  return response.data;
};

export const updateUserData = async (userId: string, data: Partial<IUser>): Promise<User> => {
  const response = await apiClient.post<IUser>(`/update-user-data/${userId}`, data);
  return response.data;
};
