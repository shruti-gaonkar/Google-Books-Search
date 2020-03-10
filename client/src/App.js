import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from './pages/Books';
import BooksSaved from './pages/BooksSaved';
import { Navbar, Icon, NavItem } from 'react-materialize';
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar className="grey darken-2"
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
        <NavItem href="/">
          Search
      </NavItem>
        <NavItem href="/saved">
          Saved
      </NavItem>
      </Navbar>
      <Router>
        <Route exact path="/" component={Books} />
        <Route exact path="/saved" component={BooksSaved} />
      </Router>
    </Router>
  );
}

export default App;
