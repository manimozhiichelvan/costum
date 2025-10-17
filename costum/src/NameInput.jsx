import React, { useState } from 'react'
import { useUserStore } from './useUserStore'
import { useNavigate } from 'react-router-dom'

export default function NameInput() {
  const [input, setInput] = useState('')
  const setName = useUserStore((state) => state.setName)
  const navigate = useNavigate()

  const handleSave = () => {
    setName(input)
    navigate('/show') // go to next page
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSave} style={{ marginLeft: '10px' }}>
        Save & Continue
      </button>
    </div>
  )
}
