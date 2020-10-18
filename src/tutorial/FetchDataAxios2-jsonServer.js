import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchDataAxios2() {

  const [users, setUsers] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:9000"
  })

  const getUserData = async() => {
    const userData = await api.get('/users').then(res=>(res.data));
    setUsers(userData);
  }

  const addUser = async() => {
    const add = await api.post('/users', {id:6, name:"Yuki", age:33}).then(res=>console.log(res))
    getUserData();
  }

  const deleteUser = async(id) => {
    const remove = await api.delete(`/users/${id}`).then(res=>console.log(res));
    getUserData();
  }

    const editUser = async (id, value) => {
      const edit = await api
        .patch(`/users/${id}`, value)
        .then((res) => console.log(res));
      getUserData();
    };

  useEffect(()=>{
    getUserData();
  },[])

  console.log(users);
  return (
    <div>
      <button onClick={() => addUser()}>Add User</button>
      {users.map((user) => (
        <div className="item" key={user.id}>
          <h1>{user.name}</h1>
          <button onClick={()=>editUser(user.id, {name: 'Yamato'})}>Edit</button>
          <button onClick={()=>deleteUser(user.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default FetchDataAxios2
