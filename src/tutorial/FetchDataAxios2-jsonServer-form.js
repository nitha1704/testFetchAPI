import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataAxios2() {
  const [users, setUsers] = useState([]);
  const [id, setID] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);

  const [person, setPerson] = useState({
    id: "",
    name: "",
    age: "",
  });

  const api = axios.create({
    baseURL: "http://localhost:9000",
  });

  const getUserData = async () => {
    const userData = await api.get("/users").then((res) => res.data);
    setUsers(userData);
  };

  const deleteUser = async (id) => {
    const remove = await api
      .delete(`/users/${id}`)
      .then((res) => console.log(res));
    getUserData();
  };

  const editUser = async (id, value) => {
    const edit = await api
      .patch(`/users/${id}`, value)
      .then((res) => console.log(res));
    getUserData();
  };

  const getIdValue = (event) => {
    setPerson({ ...person, id: event.target.value });
  };
  const getNameValue = (event) => {
    setPerson({ ...person, name: event.target.value });
  };
  const getAgeValue = (event) => {
    setPerson({ ...person, age: event.target.value });
  };

  // Add User
  const handleSubmit = async (event) => {
    event.preventDefault();

    await api.post("/users", { ...person }).then((res) => console.log(res));
    getUserData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(person);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">id</label>
          <input
            type="number"
            id="id"
            class="form-control"
            onChange={getIdValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            onChange={getNameValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            class="form-control"
            onChange={getAgeValue}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {users.map((user) => (
        <div className="item" key={user.id}>
          <h1>ID: {user.id}, Name: {user.name}, Age: {user.age}</h1>
          <button onClick={() => editUser(user.id, { name: person.name })}>
            Edit
          </button>
          <button onClick={() => deleteUser(user.id)}>X</button>
        </div>
      ))}
    </>
  );
}

export default FetchDataAxios2;
