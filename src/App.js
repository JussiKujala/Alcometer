import './App.css';

function handleSubmit(e){
  e.preventDeafult();
  let weight = 0;
  if(gender == male){
    
  }
}


function App() {
  return (
    <form>
      <div>
        <label>Body Weight (kg)</label>
        <input type="number" onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Amount of Alcohol Consumed(33cl bottles)</label>
        <input type="text" />
      </div>
      <div>
        <label>Gender:</label>
        <label> <input type="radio" name="gender" defaultChecked onChange={e => setGender(e.target.value)} />Male</label>
        <label> <input type="radio" name="gender" onChange={e => setGender(e.target.value)} />Female</label>
      </div>
      <div>
        <label>Time Since First Drink:</label> <input type="text" />
      </div>
      <input type="submit" />
    </form>
  );
}



export default App;

