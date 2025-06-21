import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { getTodos, postTodo } from './my-api';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <QueryClientProvider client={queryClient}>
         <App />
    </QueryClientProvider>

  </React.StrictMode>,
);
