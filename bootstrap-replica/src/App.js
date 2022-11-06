import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import { Burger, Menu } from './components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
        <div>
          <TopBar/>
        </div>
        <div>
          <StoreListing/>
        </div>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;