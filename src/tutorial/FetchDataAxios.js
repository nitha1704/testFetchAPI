import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataAxios() {
  const [users, setUsers] = useState([]);

  const usersData = async () => {
    const getUsersData = await axios
      .get("http://localhost:3000/zpuck.json")
      .then((res) => res.data)
      .catch((err) => console.log(err));

      setUsers(getUsersData)
    
  };

  const addNewUser = async()=>{
    const newUser = await axios.post("http://localhost:3000/zpuck.json", {
      id: 4,
      name: "Anastasia",
      age: 15,
    }).then(res=>console.log(res))
  }

  useEffect(() => {
    usersData();
  }, []);

console.log(users);

  return (
    <div>
      <h1>Fetch Data Axios</h1>
      <button onClick={()=>addNewUser()}>Add New User</button>
      {users.map((user) => (
        <h2 key={user.id} style={{color:'red'}}>{user.name}</h2>
      ))}
    </div>
  );
}

export default FetchDataAxios;
