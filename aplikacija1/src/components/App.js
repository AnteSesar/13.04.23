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

//5.8
// "import React from 'react';" opet opet
// promjenili smo app iz "function" u "class"
import KorisnikKlasa from './KorisnikKlasa';
import KorisnikFunkcija from './KorisnikFunkcija';
import KorisnikDjete from './KorisnikDjete';
import Korisnik from './korisnik';

//5.9
//?

// //5.13
// import KorisnikFunkcija from './KorisnikFunkcija';



////
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
export default class App extends React.Component {

  state = {
    korisnici: [
      {id: 1, ime: "Goran", godine: 30},
      {id: 2, ime: "Nataša", godine: 20},
      {id: 3, ime: "Josipa", godine: 22},
      {id: 4, ime: "Katarina", godine: 23}
    ]
  };

  handleNameChange = (event, index) => {
    console.log("handleNameChange");
    const {korisnici} = this.state;
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].name = event.target.value;
    this.setState({korisnici: noviKorisnici});
    console.log("handleNameChange1");
  };
 
//   const [korisnici, setKorisnici] = React.useState ([
//       {ime: "Marko", godine: 27},
//       {ime: "Katarina", godine: 21},
//       {ime: "Nataša", godine: 20},
//       {ime: "Sunčica", godine: 5}
//     ])

//   const promjeniGodine = () => {
//     //const {korisnici} = this.state;
//     const novikorisnici = korisnici.map( korisnik =>
//       {
//       return {...korisnik, godine: korisnik.godine + 1 }
//       }
//       );
//       setKorisnici(novikorisnici);
//   }

// //5.10
//   const promijeniIme = event => {
//     const najnovikorisnici = korisnici.map(korisnik =>
//       {
//         var rndName = randomstring.generate({
//           length: 8
//         });
//         return {...korisnik, ime: rndName}
//       });
//       setKorisnici(najnovikorisnici);
//   }

//   //const {korisnici, dodatni_tekst} = this.state;

//   var zbroj = sum(10, 12) * pi;
//   var rndStr = randomstring.generate({
//     length: 8,
//   });
//   console.log(rndStr);
//   var od = oduzmi(num1, num2);

//   /////
//   //5.5
//   var prva = "prvi-text";
//   var druga = "drugi-text";



render(){
  const {korisnici} = this.state;
  return (
    <div className="App">
       {/* <header className="App-header">
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

      <KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine} onButtonClick={promjeniGodine}/>
      <KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine} onButtonClick={promjeniGodine}/>
      <KorisnikFunkcija ime={korisnici[2].ime} godine={korisnici[2].godine} onNameChange={promijeniIme}/>
      <KorisnikDjete ime={korisnici[3].ime} godine={korisnici[3].godine}>
        Neki tekst
      </KorisnikDjete>  */}
      {korisnici.map((korisnik, index) => (
      <KorisnikFunkcija key={korisnik.id} ime={korisnik.ime} godine={korisnik.godine} onNameChange={event => this.handleNameChange(event, index)}/>
      ))}
      </div>
  );
}
}

// export default App;
