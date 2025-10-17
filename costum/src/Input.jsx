import React from 'react'
import { Useuser} from './Useuser.jsx'

export default function Input() {
    const [input,setInput]=useState('')
    const setName=Useuser((state)=>state.setname)

    return (
    <div>
        <input type="text" placeholder='Enter your name' value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={()=>setName(input)}>save</button>
    </div>
  )
}
