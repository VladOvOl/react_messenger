import React from 'react'
import { ThemeProvider } from './ThemeProvoder'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import { AuthProvider } from './AuthProvider'

type Props = {
  children: React.ReactNode,
}


export const AppProvider = ({children}: Props) => {

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider defaultTheme={'light'} storageKey="vite-ui-theme">
          {children} 
          </ThemeProvider>
      </BrowserRouter>
      </AuthProvider>
    </Provider>
  )
}

