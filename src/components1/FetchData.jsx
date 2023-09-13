import React, {useState, useEffect} from 'react';

export default function FetchData() {
    const[data, setData] = useState("");

    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((res)=>res.json())
        .then(
            (data => {
            setData(`${data.quoteText}`)
        })
        .catch((err) => console.log(`Error: ${err}`))
    )}, [])
  return (
   <div>
    <p> Quote: {quoteText}</p>
   </div>
  )
}
