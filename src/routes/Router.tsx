import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, NotFound404, About, MobileApp, StartUp } from '../views'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/landing/mobile-app" element={<MobileApp />} />
      <Route path="/landing/start-up" element={<StartUp />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default Router
