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
      {/* <h1>{`HEllo ${process.env.REACT_APP_NAME}`}</h1> */}
      {card}
    </div>
  );
}

export default App;
