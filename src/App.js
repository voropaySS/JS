import logo from './logo.svg';
import './App.css';
import {Preview,  CreatePDF} from './CreatePDF.js'


function App() {
  return (
    <div className="App">
        <CreatePDF/>
        <Preview/>
    </div>
  );
}

export default App;
