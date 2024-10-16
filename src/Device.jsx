/* eslint-disable react/prop-types */
import "./App.css";

export default function Device({ productName = "watch", price = "4500" }) {
    return (
      <div className="student">
        <p> Device Name: {productName} </p>
        <p> Device Price: {price} </p>
      </div>
    );
  }