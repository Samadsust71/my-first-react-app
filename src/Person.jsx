
export default function Person() {
    const name = "Samad";
    const age = 23;
    const personStyle = {
      margin: "10px",
      padding: "10px",
      borderRadius: "10px",
      border: "2px solid tomato",
    };
    return (
      <h3 style={personStyle}>
        I am {name} and my age is {age}
      </h3>
    );
  }