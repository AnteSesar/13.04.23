import React from 'react';
import Home from './Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Adresa from './Adresa';

const Kontakt = () => {
    return(
        <div>
            <h2>Kontakt</h2>
            <p>099 152 84 32</p>
        </div>
    );
}

export default function AppRouter() {
    return(
        <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/adresa/">Adresa</Link>
                    </li>
                    <li>
                        <Link to="/kontakt/">Kontakt</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/adresa/" element={<Adresa/>} />
                <Route path="/kontakt/" element={<Kontakt/>} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}