import React from 'react'

const useState_Object = () => {
    const [mon,setMon] = React.useState({
        name: 'PUCK',
        age: 25,
        job: 'Intern'
    });
    const RenderItem = ()=>{
       return (
         <div className="item">
           <p>{mon.name}</p>
           <p>{mon.age}</p>
           <p>{mon.job}</p>
           <button onClick={()=> changeValue()}>Change</button>
         </div>
       );
        
    }
    
    const changeValue = () => {
        setMon({...mon, name:'xuper', job: 'Developer'})
    }


    return (
        <>
            <div className="wrap-item">
                <RenderItem />
            </div>
        </>
    )
}

export default useState_Object;