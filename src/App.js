import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/login/index'
import Signup from './components/signup/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
