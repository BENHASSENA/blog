
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { Transition } from 'react-transition-group';
import Footer from './components/Footer';
import Single from './pages/Single';


const routes = [

  { path: '/projets/:title', name: 'Blog', Component: Single},
  { path: '/projets', name: 'Blog', Component: Blog},
  { path: '/contact', name: 'Contact', Component: Contact},
  { path: '/', name: 'Home', Component: Home},
]


function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Transition timeout={600} className="fade">
        <Switch>
           {routes.map(({path, Component}) => (
              <Route key={path} path= {path}>
                {({match}) => (
                 
                    <>
                       <Component/>
                    </>
                 
                )}
              </Route>
          ))}
        </Switch>
        </Transition>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
