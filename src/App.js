import logo from './logo.svg';
import './App.css';
import data from './data';
import Autocomplete from './components/Autocomplete';
function App() {

  return (
    <div className="App">
     
      <Autocomplete data={data}  />
    </div>
  );
}

export default App;
