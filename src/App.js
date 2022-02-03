import { useState } from 'react';
import './App.css';


function App() {
  const [weight, setWeight] = useState(0);
  const [drinks, setDrinks] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let alcoholburn = 3;
    if (gender === 'male') {
      alcoholburn = 1;
    }
    else {
      alcoholburn = 2;
    }
    setResult(alcoholburn);
  }



  return (
    <form onSubmit={calculate}>
      <div>
        <label>Body Weight (kg)</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Amount of Alcohol Consumed (33cl bottles):</label>
        <input type="number" value={drinks} onChange={e => setDrinks(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <label> <input type="radio" value="male" defaultChecked onChange={e => setGender(e.target.value)} />Male</label>
        <label> <input type="radio" value="female" onChange={e => setGender(e.target.value)} />Female</label>
      </div>
      <div>
        <label>Time Since First Drink (hours):</label> <input type="text" />
      </div>
      <div>
        <label>Your Blood Alcohol Concentration</label>
        <output>{result.toFixed(0)}</output>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;

