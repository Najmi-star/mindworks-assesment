import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPageComponent from './components/MainPageComponent'

function App() {
  return (
    <div>
      <Router>
        <div className="container" style={{width:'50%'}}>
          <Switch>
            <Route path="/" exact component={MainPageComponent}></Route>
            <Route path="/comment" component={MainPageComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
