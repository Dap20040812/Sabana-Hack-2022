import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import Agenda from './components/Agenda';
import Challenge from './components/Challenge';
import Awards from './components/Awards';
import Mentors from './components/Mentors';
import Jurors from './components/Jurors'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/agenda' component={Agenda}/>
          <Route path='/challenge' component={Challenge}/>
          <Route path='/awards' component={Awards}/>
          <Route path='/mentors' component={Mentors}/>
          <Route path='/judges' component={Jurors}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
