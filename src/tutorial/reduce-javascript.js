import React from 'react'

const ReduceJavascript = () => {

    const [elderDragon, setElderDragon] = React.useState([
      { name: "Fatalis", age: 100 },
      { name: "Teostra", age: 200 },
      { name: "Lunastra", age: 300 },
      { name: "Daora", age: 400 },
      { name: "Chameleos", age: 500 },
      { name: "Nergigante", age: 1000 },
    ]);

    const sumAge = elderDragon.reduce((acc,item)=>{
       console.log(acc, item);
       return acc + item.name
    },0)
    console.log('Total Age:', sumAge);
    

    return (
        <div>
            <h1>Reduce JS</h1>
        </div>
    )
}

export default ReduceJavascript;
