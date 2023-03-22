import { useState } from "react";

const users = [
  {
    name: 'Sarah', age:20
  },
  {
    name: 'Jake', age:31
  },
  {
    name: "Michael", age:25
  }
]


const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string, age: number | undefined}>();

  const onClick = () => {
    const foundUser = users.find((user)=>{
      return user.name === name;
    })

    setUser(foundUser)
  };
  

  return (
    <div>
      User Search
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch;