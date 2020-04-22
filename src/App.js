import React from 'react';
import './App.css';



import { Route, Switch } from 'react-router-dom';
import AboutUs from './pages/about-us/about-us.component';
import HomePage from './pages/home-page/home-page.component';

const App = props =>{

 
    return (
      <div className="App">
        <Switch>
        <Route path='/' exact component={HomePage} />  
        <Route path='/about-us' exact component={AboutUs} />
        </Switch>
       
      </div>
    );
  
}

export default App;
