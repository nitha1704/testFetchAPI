import React, { useState, useEffect } from "react";

function UseEffectCleanUp() {
  const [name, setName] = useState("puck");
  const [text, setText] = useState(window.innerWidth);

  const changeName = () => {
    if (name === "puck") {
      setName("xup");
    } else {
      setName("puck");
    }
  };

  const handleResize = () => {
    setText(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // return () => {
    //    window.removeEventListener("resize", handleResize);
    // };
  },[]);

  useEffect(() => {
    console.log("USE STATE");
  });

  return (
    <>
      <h2>Use Effect CleanUp</h2>
      <h1>{name}</h1>
      <button onClick={() => changeName()}>CHANGE NAME</button>
      <h1>Window Width: {text} PX</h1>
    </>
  );
}

export default UseEffectCleanUp;
