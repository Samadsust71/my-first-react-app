import "./App.css";

export default function Student() {
    const student = {
      name: "Samad",
      age: 23,
    };
    return (
      <div className="student">
        <h3>Hi, I am {student.name}</h3>
        <p>I am {student.age} years old</p>
      </div>
    );
  }
  