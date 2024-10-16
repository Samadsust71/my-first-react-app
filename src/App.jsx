import "./App.css";
import Actor from "./Actor";
import Singer from "./Singer";
import Device from "./Device";
import Student from "./Student";
import Person from "./Person";
import ToDo from "./ToDo";

function App() {
  const actors = ['salman','amir','shahrukh','saif','shakib']
  const singers = [
    {id:1, name:'Beyonce',age:50},
    {id:2, name:'Ariana',age:25},
    {id:3, name:'Lady Gaga',age:40},
    {id:4, name:'Dua Lipa',age:30}
  ]
  return (
    <>

    {
      actors.map(actor => <Actor key={actor} name={actor}/>)
    }
    {/* {
      actors.map(actor => <Actor key={actor} name={actor}/>)
    } */}
    {
      singers.map(singer=><Singer key={singer.id} name = {singer.name} age={singer.age} />)
    }

     <ToDo task="khawa" isDone={true} />
     <ToDo task="Snan" isDone={false}/>
     <ToDo task="Brush" isDone={false}/>
     <ToDo task="Fresh" isDone={false}/>
    <Device productName="laptop" price="50000"/>
    <Student />
    <Person />
      {/* <Device productName="laptop" price="50000" />
      <Device productName="mobile" price="20000" />
      <Device />
      <Person />
      <Student /> */}
    </>
  );
}

// function Device({ productName = "watch", price = "4500" }) {
//   return (
//     <div className="student">
//       <p> Device Name: {productName} </p>
//       <p> Device Price: {price} </p>
//     </div>
//   );
// }

// function Person() {
//   const name = "Samad";
//   const age = 23;
//   const personStyle = {
//     margin: "10px",
//     padding: "10px",
//     borderRadius: "10px",
//     border: "2px solid tomato",
//   };
//   return (
//     <h3 style={personStyle}>
//       I am {name} and my age is {age}
//     </h3>
//   );
// }

// function Student() {
//   const student = {
//     name: "Samad",
//     age: 23,
//   };
//   return (
//     <div className="student">
//       <h3>Hi, I am {student.name}</h3>
//       <p>I am {student.age} years old</p>
//     </div>
//   );
// }

export default App;
