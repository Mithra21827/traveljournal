import Navbar from '../src/Components/Navbar'
import data from '../src/Data/TravelDataa'
import Card from './Components/Card';
function App() {
  let card = data.map(data=>{
    return (
      <Card 
        key={data.id}
        item={data}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      {card}
    </div>
  );
}

export default App;
