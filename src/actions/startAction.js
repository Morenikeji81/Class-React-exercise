import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function startAction() {
   
  return (
    {
        type: "rotate",
        payload:true
    }
    // <div>startAction</div>
  )
}
