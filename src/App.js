import React from "react";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import HomePage from "./components/Pages/Home";
import NotesList from "./components/NotesList";
import rootReducer from "./redux/reducers/notes";
import Enter from "./components/Pages/Enter";
import Author from "./components/Pages/Author";




const store = createStore(rootReducer);
const App = () => {
 
    return (
      <Provider store={store}>                        
            <Route  path="/main">
              <HomePage />
            </Route> 
            <Route path="/new/:author" component={NotesList}/>
              
           
            <Route path="/author">
              <Author />
            </Route>          
            <Route exact path="/">
              <Enter />
            </Route>  
                   
      </Provider>
    );
};

export default App;
