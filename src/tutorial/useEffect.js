import React, { useState, useEffect } from "react";

function UseEffect() {
  const [text, setText] = useState("hello");
  const [text2, setText2] = useState("John");

  const changeWord = () => {
    if (text === "hello") {
      setText("hell");
    } else {
      setText("hello");
    }
  };
  const changeWord2 = () => {
    if (text2 === "John") {
      setText2("Sarah");
    } else {
      setText2("John");
    }
  };

  useEffect(()=>{
      //alert('HELLO WORLD');
      console.log("HELLO WORLD");
  },[])

  useEffect(() => {
    console.log("USE EFFECT HELLO HELL");

  }, [text]);



  useEffect(() => {
    console.log("USE EFFECT John/Sarah");
        if(text2 === 'Sarah') {
            document.title = "PUCK";
        } else {
            document.title = "React App";
        }
        document.title = "PUCK";

        return () => {
            console.log('clean up')
        }
  }, [text2]);

  


  return (
    <>
      <h2>Use Effect</h2>
      <h1>{text}</h1>
      <h1>{text2}</h1>
      <button onClick={() => changeWord()}>Click Here</button>
      <br />
      <button onClick={() => changeWord2()}>Click Here2</button>
    </>
  );
}

export default UseEffect;
