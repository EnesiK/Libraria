/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFrontend/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
    </div>
  );
}

export default App;
