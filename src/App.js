
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import { Transition } from 'react-transition-group';
import { gsap } from 'gsap';

const routes = [
  { path: '/', name: 'Accueil', Component: Accueil},
  { path: '/apropos', name: 'Apropos', Component: Apropos},
  { path: '/projets', name: 'Projets', Component: Projets},
  { path: '/contact', name: 'Contact', Component: Contact},
]


function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Transition timeout={600} className="fade">
        <Switch>
           {routes.map(({path, Component}) => (
              <Route key={path} exact path= {path}>
                {({match}) => (
                 
                    <>
                       <Component/>
                    </>
                 
                )}
              </Route>
          ))}

            <Route path="/" exact component={Accueil}>      
            </Route>
            <Route path='/apropos' component={Apropos}/>
            <Route path='/projets' component={Projets}>
            </Route>
            <Route path='/contact' component={Contact}/>
     
        </Switch>
        </Transition>
      </div>
    </Router>
  );
}

export default App;
