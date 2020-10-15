import React, { useState, useEffect } from "react";

const UseEffectFetchAPI = () => {
  const [users, setUsers] = useState([]);

  const usersData = async () => {
    const getUsersData = await fetch(
      "https://api.github.com/users"
    ).then((res) => res.json());
    setUsers(getUsersData);
  };

  useEffect(() => {
    usersData();
  }, []);

  console.log(users);

  return (
    <div className="wrap-item">
      {users.map((user)=>{
          const {id,login,avatar_url} = user;
          return (
          <div className="item" key={id}>
              <img src={avatar_url} alt="" className="img-fit avatar" />
                <h1 style={{textTransform:'uppercase'}}>{login}</h1>
          </div>
          )
      })
    }
    </div>
  );
};

export default UseEffectFetchAPI;
