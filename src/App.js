
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { Transition } from 'react-transition-group';
import Footer from './components/Footer';

const routes = [
  { path: '/', name: 'Home', Component: Home},
  { path: '/projets', name: 'Blog', Component: Blog},
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
            <Route path="/" exact component={Home}>      
            </Route>
            <Route path='/blog' component={Blog}>
            </Route>
            <Route path='/contact' component={Contact}/>
        </Switch>
        </Transition>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
