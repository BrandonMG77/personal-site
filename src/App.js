
import './App.css';
import React, { Component} from 'react';
import { Router } from "react-router";
import { BrowserRouter, Link, Switch, Route, HashRouter } from "react-router-dom";
import FirstHeader from './FirstHeader';
import Show from './Show';
import Contact from './Contact';



class App extends React.Component {
  
  render() {

     return <div>
       <HashRouter basename="/personal-site">
           
              <Route exact path ="/" component={Show} />
              <Route exact path="/contact" component={Contact}/>
           
       </HashRouter>

    
      </div>

  }

}
export default App;