// const Hello = function(){
//     <p>Hello</p>
// }

import World from "./World";
import styles from "./Hello.module.css"
import { useState } from "react";

// export default Hello;

export default function Hello(profs){
    // let name ="Mike";
    console.log(profs)
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(profs.age)
    
    function changeName(){
        const newName = name == "Mike" ? "Jame" : "Mike";
        setName(newName)
          
    }
    return (
    <div>
        <h1>state</h1>
        <h2 id = "name">{name}({age})</h2>
        <button onClick={() => {
            setName(name === "Mike" ? "Jame" : "Mike");
            setAge(age + 1);    
            console.log(age)
        }}>changeName</button> 
    </div>
     );
}
