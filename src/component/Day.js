import { useParams } from "react-router-dom";
import dummy from "../db/data.json"

export default function Day() {
    //dummy words
    
    const day = useParams().day;

    const worldList = dummy.words.filter(world => (
        world.day === Number(day)
    ))
    console.log(worldList)

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {worldList.map(word => (
                        <tr key={word.id}>
                            <td>
                                {word.eng}
                            </td>

                            <td>
                                {word.kor}
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </>
    );
}