import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './pages/auth/LoginForm'
import Blog from './pages/blog/Blog'
import BlogArticle from './pages/blog/BlogArticle'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import SettingsForm from './pages/settings/SettingsForm'
import AuthProvider from './provider/AuthProvider'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogArticle />} />
          <Route path='/settings' element={
            <ProtectedRoute>
              <SettingsForm />
            </ProtectedRoute>
          } />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App