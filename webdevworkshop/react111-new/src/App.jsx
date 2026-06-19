import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [ans, setAns] = useState("");

  const fact = () => {
    let f = 1;

    for (let i = 1; i <= num; i++) {
      f *= i;
    }

    setAns(f);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Factorial Calculator</h1>

      <input
        type="number"
        placeholder="Enter Number"
        onChange={(e) => setNum(e.target.value)}
      />

      
      <button onClick={fact}>Calculate</button>

      <h2>{ans}</h2>
    </div>
  );
}

export default App;