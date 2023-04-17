import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';
import { pi, sum, imeAplikacije as mojaVariabla, num2, num1, oduzmi } from './utilities';
import person from './utilities/Person';

// import Person from "./utilities/Person";
// import { sum, pi, imeAplikacije as mojaVariabla} from "./utilities/Utility";



function App() {
  var zbroj = sum(10, 12) * pi;
  var rndStr = randomstring.generate();
  console.log(rndStr);
  var od = oduzmi(num1, num2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {mojaVariabla}, {rndStr}, {person.name}, {zbroj}, {od}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
