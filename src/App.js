import './index.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import GamePage from './pages/GamePage'
import ErrorPage from './pages/ErrorPage'
import ShopPage from './pages/ShopPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

//https://gahraycocamnovpvaatg.supabase.co/auth/v1/callback

