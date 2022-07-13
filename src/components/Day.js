
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  //dummy words

const a = useParams();
// const {day} = useParams();
const day = a.day;

const words = useFetch(`http://localhost:3001/words?day=${day}`);


  return (
    <> 
    <h2>Day {day}</h2>
    {words.length === 0 && <span>loading...</span>}
      <table>
        <tbody>
          {words && words.map((word) => (
         <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
