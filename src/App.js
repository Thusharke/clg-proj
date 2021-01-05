import './App.css';
import Home from './sections/Home';
import About from "./sections/About.js";
import Nav from "./components/Nav.js";
import News from "./sections/News.js";
import Research from "./sections/Research.js";
import Infrastructure from "./sections/Infrastructure.js";  
import Faculty from "./sections/Faculty.js";
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav d={2.8} />
        <Switch>
          <Route exact path="/">
            <Home />
            <About /> 
          </Route>
          <Route path="/news">
            <News />
          </Route> 
          <Route path="/research">
            <Research />
          </Route> 
          <Route path="/faculty">
            <Faculty />
          </Route> 
          <Route path="/infra">
            <Infrastructure />
          </Route>  
        </Switch>
        <Footer />
      </Router>
    </div>
  );
} 

export default App;
