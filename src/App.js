import React, { Component } from "react";
import { Route } from "react-router";
import { Provider } from "react-redux";
// import { HashRouter } from "react-router-dom";

import { createStore } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/Pages/Home";

import NotesPage from "./components/Pages/Notes";
import rootReducer from "./redux/reducers/notes";



const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>     
        <Router>         
          <Route exact path="/home"  component={HomePage} />
          <Route path="/new" component={NotesPage} />            
        </Router>        
      </Provider>
    );
  }
}

export default App;
