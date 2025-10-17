import React from 'react'
import {Useuser} from './Useuser.jsx'


export default function show() {
     const name=Useuser((state)=>state.name)
  return (
   
    <div>
      <h1>Hello, {name?name:'Guest'}</h1>
    </div>
  )
}
