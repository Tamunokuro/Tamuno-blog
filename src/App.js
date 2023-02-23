import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Community from './components/Community/Communities';
import Support from './components/Support/Support';
import blogs from './blog_data/data';
import communities from './components/Community/community_data/data';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/blogs">
          <Blogs blogs={blogs} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/communities">
          <Community communities={communities} />
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
