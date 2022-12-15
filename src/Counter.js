import React, {useState,useEffect} from "react";

const Counter=() => {
    const [name, setName] = useState(''); //eslint-disable-line no-unused-vars
    const [nickname, setNickname] = useState('');//eslint-disable-line no-unused-vars
    
    const onChangeName = (e) => { //eslint-disable-line no-unused-vars
        setName(e.target.value);
    };
    const onChangeNickname = (e) => { //eslint-disable-line no-unused-vars
        setNickname(e.target.value);
    };
    useEffect(() =>{
        console.log("effect");
        console.log(name);
        return ()=> {
            console.log("cleanup");
            console.log(name);
        }
    });

  return (
    <>
       <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
       </div>
    </>
  );
}

export default Counter;
