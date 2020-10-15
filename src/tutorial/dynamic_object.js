import React from 'react'

const DynamicObject = () => {

    const person = {
        name: 'pucxer'
    }
    person.age = 25;
    const valkyria = {
        'valkyria-profile' : ['Riela','Selvaria'],
        'gallian-soldier': {
            name: 'Welkin',
            age: 32
        }
    }


    let gallianSoldier = 'Welkin';
    const gallianTank = 'Edelweiss';
    const setGallian = {
        [gallianSoldier]: 'is human',
        [gallianTank]: 'is tank'
    }
    setGallian[gallianTank] = 'Strong';


    const fatalis = {
        color: '',
        location: ''
    }

    function setFatalis(property,values) {
        fatalis[property] = values;
    }

    setFatalis('color','Black');
    setFatalis("location", "Castle Schrade");
    setFatalis("age", 6000);
    setFatalis("weakness", "Head");
    setFatalis("subSpecies", ['Crimson Fatalis','White Fatalis']);


    console.log(fatalis);

    
    
    
    const DynamicObj = () => {     
        return (
          <div>
            <h1>haha</h1>
          </div>
        );
    }


    return (
        <div>
            <h1>Dynamic Object</h1>
            <DynamicObj />
        </div>
    )
}

export default DynamicObject;
