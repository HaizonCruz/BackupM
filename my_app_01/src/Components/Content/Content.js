import "./Content.css";
import { useState } from "react";








const handleClickThree = (e) => {
  console.log(e);
};

const Content = () => {

  const [name, setName] = useState('Dave');
  const HandleNameChange = ()=>{
    const names = ['Kevin', 'Haizon'];
    const int = Math.floor(Math.random() * 2);
    console.log(int);
    setName(names[int]);
  }

  return (
    <main>
      <button onClick={()=>{
        HandleNameChange()
      }}>Click</button>
      <br></br>
      <p>{name}</p>
      <br></br>
      <button onClick={(e) => handleClickThree(e)}>Click Three</button>
    </main>
  );
};

export default Content;
