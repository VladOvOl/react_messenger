import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/index.css'
import { AppProvider } from './app/index.ts'
import AppRouter from './app/routes/AppRouter.tsx'
import '@/app/lib/firebase.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <AppProvider>
      <AppRouter/>
    </AppProvider>     
  </React.StrictMode>,
)
