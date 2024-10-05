import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CreateFlashcard, Home, Login, MyFlashcards, Register, Study } from './pages'
import Layout from './components/Layout/Layout'
import { AuthProvider } from './contexts/authContext'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='createflashcard' element={<CreateFlashcard />} />
            <Route path='myflashcard' element={<MyFlashcards />} />
            <Route path='study' element={<Study />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
