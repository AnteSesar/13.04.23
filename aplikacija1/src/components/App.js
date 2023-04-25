import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';
import { pi, sum, imeAplikacije as mojaVariabla, num2, num1, oduzmi } from './utilities';
import person from './utilities/Person';

// import Person from "./utilities/Person";
// import { sum, pi, imeAplikacije as mojaVariabla} from "./utilities/Utility";

//5.5
import { Komponenta1 } from "./Komponenta1";
import { Komponenta2 } from "./Komponenta2";
import Komponenta3 from "./Komponenta3";

//5.6
import { GlavnaKomponenta } from "./GlavnaKomponenta";
import React from 'react';

//5.7
// "import React from 'react';" opet
import { WelcomeFunkcija } from "./WelcomeFunkcija"
import { WelcomeKlasa } from "./WelcomeKlasa"

// function WelcomeFunkcija() {
//   return (
//   <h2>Welcome! Komponenta definirana funkcijom.</h2>
//   );
// }


// class WelcomeKlasa extends React.Component {
//   render() {
//     return (
//       <h2>Welcome! Komponenta definirana klasom.</h2>
//     );
//   }
// }

// App je bila funkcija, sada je klasa... zbog zadatka 5.8
class App extends React.Component {
  render() {
  var zbroj = sum(10, 12) * pi;
  var rndStr = randomstring.generate();
  console.log(rndStr);
  var od = oduzmi(num1, num2);

  /////
  //5.5
  var prva = "prvi-text";
  var druga = "drugi-text";




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
      <Komponenta1/>
      <Komponenta2 podatak1={prva}/>
      <Komponenta3 podatak1={prva} podatak2={druga}/>

      <GlavnaKomponenta/>

      <WelcomeFunkcija/>
      <WelcomeKlasa/>
    </div>
  );
  };
};

export default App;
