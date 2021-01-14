import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/signin' component = {SigninPage} exact/>
       </Switch>
    </Router>
  );
}

export default App;
