// const Hello = function(){
//     <p>Hello</p>
// }

import World from "./World";
import styles from "./Hello.module.css"
import { useState } from "react";
import UserName from "./UserName";

// export default Hello;

export default function Hello({age}){
    // let name ="Mike";

    const [name, setName] = useState("Mike");
    
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    function changeName(){
        const newName = name == "Mike" ? "Jame" : "Mike";
        setName(newName) 
          
    }
    return (
    <div>
        <h1>state</h1>
        <h2 id = "name">{name}({age}) : {msg}</h2> 

        <UserName name ={name} />
        <button onClick={() => {
            setName(name === "Mike" ? "Jame" : "Mike");
           
            console.log(age)
        }}>changeName</button> 
    </div>
     );
}
