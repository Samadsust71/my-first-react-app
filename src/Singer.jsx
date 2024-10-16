/* eslint-disable react/prop-types */
import "./App.css";

export default function Singer({ name, age }) {
  return (
    <div className="singer">
      <p>Singer : {name}</p>
      <p>Age : {age}</p>
    </div>
  );
}
