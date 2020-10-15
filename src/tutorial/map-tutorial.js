import React, { useState } from "react";

import { monstersList } from "../data";




export default function Monsters() {

  const bruteWyverns = () => {
    return monstersList.map((item)=>{
      if(item.name === 'Nargacuga') {
        return item
      } else {
        return false
      }
      //return item.name === 'Tigrex'
    })
  }

  const valkyria = ['Riela','Selvaria','Alicia','Crymaria'];
  const newValkyria = valkyria.map((item)=>{
    if(item === 'Riela') {
      return true;
    } else {
      return false;
    }
  })
  

  const examScores = [100,33,24,68,92,51];
  const resultScores = examScores.map((item)=>{
    if(item >= 50) {
      return item + '/Pass';
    } else {
      return item + '/Failed';
    }
  })
  console.log(resultScores);


  const [name2,setName2] = useState(0);
  const changeName2 = (name) => {
    setName2(name);
  };

  const RenderMonsters = (props) => {
    const { image, name, species } = props.monsters;
    const [monsters, setMonsters] = useState("Monsters555");
    const changeName = () => {
      if (monsters !== name) {
        setMonsters(name);
      } else {
        setMonsters("Monsters555");
      }
    };
    return (
      <div className="item">
        <img src={image} alt="" className="img-fit" />
        <p>{name}</p>
        <p>
          {species} + {monsters}
        </p>
        <button onClick={() => changeName2(name)}>Click Here</button>
        <h1 className="valValue">{valkyria}</h1>
      </div>
    );
  };

  return (
    <React.Fragment>
      <h1>This is List of Monsters: {name2}</h1>
      <div className="wrap-item">
        {monstersList.map((item) => {
          return <RenderMonsters monsters={item} />;
        })}
      </div>
    </React.Fragment>
  );
}
