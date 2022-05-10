// const Hello = function(){
//     <p>Hello</p>
// }

import World from "./World";
import styles from "./Hello.module.css"

// export default Hello;

export default function Hello(){
    return (
    <div>
        <h1>Hello</h1>
        <button onClick={showName}>show name</button>
        <button onClick={
            ()=>{
                // console.log("#")
                showAge(30);
            }
        }>show age</button>
        <br/>
        <input type="text" onChange={showText}/>
    </div>
     );
}

function showName(){
    console.log("Mike");
}

function showAge(age){
    console.log(age)
}

function showText(e){
    console.log(e.target.value)
}