import React from 'react'
import {create} from 'zustand'
import { presist } from 'zustand/middleware'

export const Useuser=create(
        presist (
            (set) => ({
                name: '',
                setName: (value) => set({name:value}),
            }),
            {
                name:'user-storage'
            }
        ))
  

