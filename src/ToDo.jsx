/* eslint-disable react/prop-types */
import "./App.css";

// export default function ToDo({ task, isDone }) {
//     let list;
//   return (
//     list = <li className="student">
//     {task} : {isDone ? "✔✔" : "❌❌"}{" "}
//   </li> 
//   );
// }


export default function ToDo({ task, isDone }) {
  return (
    <li className="student">
      {task} : {isDone ? "✔✔" : "❌❌"}{" "}
    </li>
  );
}


// export default function ToDo({task,isDone}) {
//    return <li className="student">{task} : {isDone && '✔✔'} </li>
// }


// export default function ToDo({task,isDone}) {
//    return <li className="student">{task} : {isDone || '❌❌'} </li>
// }

