import React from 'react'
import { useState, useEffect} from 'react'


export default function Card() {
const [count, setCount] = useState(0)
const [name, setName]= useState('Jessica')


useEffect(()=>{
 let timer = setTimeout(()=>{
  setCount((count) => count + 1)
}, 1000)
return()=> clearTimeout(timer)
}, [])
return(
  <>
  <h2>{`Hello ${name}!`}</h2>
  <h1>I've rendered {count} times!</h1>
  <p>Count:{count}</p>
  </>
) 
}
 






