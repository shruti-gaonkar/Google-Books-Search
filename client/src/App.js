import React from 'react';
import Books from './pages/Books';
import { Navbar, Icon, NavItem } from 'react-materialize';
//import './App.css';

function App() {
  return (
    <><Navbar className="grey darken-2"
      alignLinks="right"
      brand={<a className="brand-logo" href="#">Google Books</a>}
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}>
      <NavItem href="">
        Search
      </NavItem>
      <NavItem href="components.html">
        Saved
      </NavItem>
    </Navbar>
      <Books />
    </>
  );
}

export default App;
