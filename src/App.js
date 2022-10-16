import './App.css';
import Luminar from './components/Luminar';
import Demo1 from './components/Demo1';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [fname,setname] = useState("Pooja")
  const [lname,setlname] =useState("Thejus")

  const data = [
    {ename:"Pooja",age:23},
    {ename:"Nidhiya",age:20},
    {ename:"Akhila",age:24},
    {ename:"Anumol",age:27},
  ]
  return (
    <div>
     
      <p>App1</p>
      <p>App2</p>
      <Luminar first={fname} last={lname}/>
      <Demo1/>
      <Counter/>

      <h1>User List</h1>
      {
        data.map(item=>(
          <div className='text-center'>
            <h3>Username:{item.ename}</h3>
            <h3>Age:{item.age}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default App;
