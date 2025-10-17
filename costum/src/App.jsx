import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NameInput from './NameInput'
import ShowName from './ShowName'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NameInput />} />
        <Route path="/show" element={<ShowName />} />
      </Routes>
    </BrowserRouter>
  )
}
