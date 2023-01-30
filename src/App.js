import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Community from './components/Communities';
import Support from './components/Support';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/communities">
          <Community />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/support">
          <Support />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
