import './App.css';
import StarWarsAPI from './services/Sw-api'
import StarShipCard from './services/StarShipCard';

function App() {
  return (
    <div className="App">
      <StarWarsAPI />
    </div>
  );
}

export default App;
