// const Hello = function(){
//     <p>Hello</p>
// }

import World from "./World";
import styles from "./Hello.module.css"
import { useState } from "react";

// export default Hello;

export default function Hello(){
    // let name ="Mike";
    const [name, setName] = useState("Mike");

    function changeName(){
        const newName = name == "Mike" ? "Jame" : "Mike";
        setName(newName)
          
    }
    return (
    <div>
        <h1>state</h1>
        <h2 id = "name">{name}</h2>
        <button onClick={changeName}>changeName</button> 
    </div>
     );
}
