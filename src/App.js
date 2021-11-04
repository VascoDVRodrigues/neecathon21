import './index.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import GamePage from './pages/GamePage'
import ErrorPage from './pages/ErrorPage'
import ShopPage from './pages/ShopPage'

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/home" element={<GamePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    )
}