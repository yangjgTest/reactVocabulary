// const Hello = function(){
//     <p>Hello</p>
// }

import World from "./World";

// export default Hello;

export default function Hello(){
    return (
    <div>
        <p>Hello</p>
        <World/>
        <World/>
    </div>
     );
}