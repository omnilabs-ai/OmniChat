import './App.css'

import ProfilePageLayout from './components/ProfilePage/layout';
import AuthPageLayout from './components/AuthPage/layout';
import AppLayout from './components/ChatPage/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import { useAtom } from 'jotai'
import { themeAtom } from './atoms'
import { useAuth } from './hooks/useAuth';
import ProtectedRoute from './components/Shared/ProtectedRoute';
import Profile from './components/ProfilePage/components/Profile';
import ApiKeys from './components/ProfilePage/components/ApiKeys';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPageLayout />
  },
  {
    path: '/',
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>
  },
  {
    path: '/profile',
    element: <ProtectedRoute><ProfilePageLayout /></ProtectedRoute>,
    children: [
      {
        path: '',
        element: <Profile />
      },
      {
        path: 'api-keys',
        element: <ApiKeys />
      }
    ]
  }
]);

function App() {
  const [theme] = useAtom(themeAtom)
  // const { currentUser } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
