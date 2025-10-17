import React from 'react'
import { useUserStore } from './useUserStore'
import { useNavigate } from 'react-router-dom'

export default function ShowName() {
  const name = useUserStore((state) => state.name)
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Hello, {name ? name : 'Guest'} </h2>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}
