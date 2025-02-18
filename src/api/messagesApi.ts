import apiClient from './client';

export const sendMessage = async (text: string) => {
  const response = await apiClient.post('/messages', { text });
  return response.data;
};
