import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ProSidebarProvider } from "react-pro-sidebar";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProSidebarProvider>
          <App />
      </ProSidebarProvider> 
    </QueryClientProvider>
  </React.StrictMode>,
)
