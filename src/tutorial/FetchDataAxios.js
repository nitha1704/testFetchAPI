import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataAxios() {
  const [users, setUsers] = useState([]);

  const usersData = async () => {
    const getUsersData = await axios
      .get(
        "https://express-netlify-lambda1704.netlify.app/.netlify/functions/api/"
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));

      setUsers(getUsersData)
    
  };

  const addNewUser = async()=>{
    const people = {
      id: 4,
      name: "Anastasia",
      lastname: "Mortimer"
    };

    const newUser = await axios.post("https://express-netlify-lambda1704.netlify.app/.netlify/functions/api/",people)
      .then((res) => {
        console.log(res);
        usersData();
      });
  }

  useEffect(() => {
    usersData();
  }, []);

console.log(users);

  

  return (
    <div>
      <h1>Fetch Data Axios</h1>
      <button onClick={()=>addNewUser()}>Add New User</button>

      {users.length === 0 && <h2>Now loading....</h2>}

      {users.length > 0 && users.map((user) => (
        <h2 key={user.id} style={{color:'red'}}>{user.name}</h2>
      ))}

    </div>
  );
}

export default FetchDataAxios;
