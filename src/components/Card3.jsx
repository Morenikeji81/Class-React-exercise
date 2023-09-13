import React, {useState} from 'react'

export default function Card3() {
const[firstName, setFirstName]= useState('Barbara')
const[lastName, setLastName] = useState('Hepworth')
const[email, setEmail] = useState('adewaleOluwatoyin@gmail.com')
const [form, setForm] = useState({
  firstName: 'Oluwatoyin',
  surName:'Adewale',
  email:'oluwatoyin81@gmail.com',
artwork:{
  title:'Blue',
  city:'Hamburg'
}
})

  const user = {
    namePerson: 'Herdy',
    imageURL: 'http://i.imgur.com/yxovd0ss.jpg'
  }
  const products = [
    {title:'Cabbage', isFruit:true, id:1},
    {title:'Garlic', isFruit:false, id:2},
    {title:'Apple', isFruit:true, id:3},
    {title:'Onions', isFruit:false, id:4},
    {title:'Ginger', isFruit:true, id:5},
    {title:'Garlic', isFruit:false, id:6}
  ];
  const listItems = products.map(product => 
    <li key={product.id} style={{color: product.isFruit?'magneta':'darkgreen'}}>
    {product.title}
    </li>
    )
    const listItems1 = products.map(product => 
      <li key={product.id} style={{color: product.isFruit? "yellow": 'blue'}}>
      {product.title}
      </li>
    )
    
  
    
  return (
    <div>
       <button>R u sure, u r a button at all?</button>
       <p>{user.namePerson}</p>
       <img src={user.imageURL} alt={user.namePerson} />
       <ul>{listItems}</ul>
       <ul>{listItems1}</ul>
<form>
<label>
First Name: 
       <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
</label>
<br />
<br />
<label>
Last Name: 
       <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
</label>
<br />
<br />
<label>
Email:  
       <input value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
</form>
  <p>{firstName} {lastName} ({email})</p>  
  <form >
    <label >
      First Name:
      <input value={form.firstName} onChange={(e) => setForm(e.target.value)}/>
    </label>
    <label >
      Surname:
      <input value={form.surName} onChange={(e) => setForm(e.target.value)}/>
    </label>
    <br />
    <br />
    <label >
     Artwork Title
      <input value={form.artwork.title} onChange={(e) => setForm(e.target.value)}/>
      <br />
      <br />
      City:
      <input value={form.artwork.city} onChange={(e) => setForm(e.target.value)}/>
    </label>
    </form> 
    </div>
  )
}

