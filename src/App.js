import { useEffect, useState } from 'react';
import './App.css';

const randomUsers =[
  {
    userName: "name1",
    id: 1
  },
  {
    userName: "name2",
    id: 2
  },
  {
    userName: "name3",
    id: 3
  },
  {
    userName: "name4",
    id: 4
  },
  {
    userName: "name5",
    id: 5
  },
  {
    userName: "name6",
    id: 6
  },
  {
    userName:" name7",
    id: 7
  },
  {
    userName: "name8",
    id: 8
  },
  {
    userName: "name9",
    id: 9
  },
  {
    userName: "name10",
    id: 10
  },
]


function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    setUsers(randomUsers)
  }, [])
  
  const removeUser = () =>{
    setUsers((prev)=>{
      const index = Math.floor(Math.random() * prev.length)
      const newUsers = prev.filter((_,ind)=> ind !== index)
      return newUsers
    })
  }

  return(
    <div>
      <div>
        {users.map(({id, userName})=>{
          return <h2 key={id}>{userName}</h2>
        })}
        <button onClick={removeUser}> remove User</button>
      </div>
    </div>
  );
}

export default App;
