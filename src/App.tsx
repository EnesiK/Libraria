/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFrontend/Navbar';
import { Footer } from './layouts/NavbarAndFrontend/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBookspage/SearchBooksPage';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBooksPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}


