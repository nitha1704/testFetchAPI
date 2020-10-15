import React from "react";
import { monstersList } from "../data";

const useState_filterArray = () => {
  const RenderMonstersList = () => {
    const [dataMon, setDataMon] = React.useState(monstersList);

    const findMon = dataMon.find((item)=>{
      return item.name === 'Nargacuga';
    })
    console.log(findMon)

    const removeItem = (id) => {
      const filterMonsters = dataMon.filter((item) => item.id !== id);
      setDataMon(filterMonsters);
    };

    const changeName = (id) => {
      setDataMon((prevState) => {
        const filterMonsters = prevState.filter((item) => {
          if (item.id === id) {
            return item;
          }
        });
        filterMonsters.map((item) => {
          item.name = id;
          item.species = "puck";
        });
        console.log(filterMonsters);
        return [...prevState];
      });
    };

    return dataMon.map((item) => {
      return (
        <div className="item">
          <img src={item.image} alt="" className="img-fit" />
          <h1>{item.name}</h1>
          <p>{item.species}</p>
          <button
            className=""
            onClick={() => {
              changeName(item.id);
            }}
          >
            Change Name
          </button>
          <br />
          <button className="" onClick={() => removeItem(item.id)}>
            Remove Item
          </button>
        </div>
      );
    });
  };

  return (
    <>
      <div className="wrap-item">
        <RenderMonstersList />
      </div>
    </>
  );
};

export default useState_filterArray;
