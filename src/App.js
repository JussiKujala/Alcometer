import { useState } from 'react';
import './App.css';


function App() {
  const [weight, setWeight] = useState(0);
  const [drinks, setDrinks] = useState(0);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let BAC = 3;
    /*litres: bottles * 0.33
    grams: litres * 8 * 4.5
    burning: weight / 10
    grams(left): grams – (burning * time)*/
    let liters = drinks * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    if (gender === 'male') {
      BAC = gramsLeft / (weight * 0.7);
    }
    else {
      BAC = gramsLeft / (weight * 0.6);
    }
    if (BAC > 0) {
      setResult(BAC);
    }
    else {
      setResult(0);
    }
  }



  return (
    <form onSubmit={calculate}>
      <h3>Blood Alcohol Concentration Caculator</h3>
      <div>
        <label>Body Weight (kg) </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Amount of Alcohol Consumed (33cl bottles): </label>
        <input type="number" value={drinks} onChange={e => setDrinks(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <label> <input type="radio" name='gender' value="male" defaultChecked onChange={e => setGender(e.target.value)} />Male</label>
        <label> <input type="radio" name='gender' value="female" onChange={e => setGender(e.target.value)} />Female</label>
      </div>
      <div>
        <label>Time Since First Drink (hours):</label> <input type="number" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div>
        <label>Your Blood Alcohol Concentration: </label>
        <output>{result.toFixed(2)}</output>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;

