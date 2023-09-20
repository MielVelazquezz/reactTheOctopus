// import logo from './logo.svg';
import './App.css';
import { Header,  Footer } from '../src/Componentes/Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

// PÁGINAS
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';
import About from '../src/Pages/About';
import Team from '../src/Pages/Team'
import Policy from '../src/Pages/Policy';

// PRODUTOS
// Mochilas 
import Product1 from '../src/Pages/Products/Product1'
import Product2 from '../src/Pages/Products/Product2'
import Product3 from '../src/Pages/Products/Product3'
import Product4 from '../src/Pages/Products/Product4'
import Product5 from '../src/Pages/Products/Product5'
// Chapeus
import Product6 from '../src/Pages/Products/Product6'
import Product7 from '../src/Pages/Products/Product7'
import Product8 from '../src/Pages/Products/Product8'
import Product9 from '../src/Pages/Products/Product9'
import Product10 from '../src/Pages/Products/Product10'
import Product11 from '../src/Pages/Products/Product11'
import Product12 from '../src/Pages/Products/Product12'

function App() {

  return (

    <BrowserRouter>

      <>
        <Header />

        <Routes>

          {/* PÁGINAS  */}
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/Policy" element={<Policy />}></Route>

          {/* PRODUTOS */}
          <Route path="/Product1" element={<Product1 />}>   </Route>
          <Route path="/Product2" element={<Product2 />}>   </Route>
          <Route path="/Product3" element={<Product3 />}>   </Route>
          <Route path="/Product4" element={<Product4 />}>   </Route>
          <Route path="/Product5" element={<Product5 />}>   </Route>

          <Route path="/Product6" element={<Product6 />}>   </Route>
          <Route path="/Product7" element={<Product7 />}>   </Route>
          <Route path="/Product8" element={<Product8 />}>   </Route>
          <Route path="/Product9" element={<Product9 />}>   </Route>
          <Route path="/Product10" element={<Product10 />}> </Route>
          <Route path="/Product11" element={<Product11 />}> </Route>
          <Route path="/Product12" element={<Product12 />}> </Route>

        </Routes>

        <Footer />
      </>

    </BrowserRouter>

  );

}

export default App;