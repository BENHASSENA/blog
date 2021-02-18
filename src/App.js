import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import data from './data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Projets from './pages/Projets'


function App() {
  const [student, setStudent] = useState(data);
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/">
            <List student={student}/>
            <button className="btn" onClick={() => setStudent ([])}>Refresh</button>
          </Route>
          <Route path="/apropos component={Apropos}"/>
          <Route path="/projets component={Projets}"/>
          <Route path="/contact component={Contact}"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
