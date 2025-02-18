import apiClient from './client';
import { ChatCompletionRequest, ChatCompletionResponse, SmartRouterRequest } from '../types/chat';

export const chatCompletion = async (request: ChatCompletionRequest) => {
  const response = await apiClient.post<ChatCompletionResponse>('/chat/completions', request);
  return response.data;
};

export const smartSelect = async (request: SmartRouterRequest) => {
  const response = await apiClient.post<ChatCompletionResponse>('/router/select-model', request);
  return response.data;
};
