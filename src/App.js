import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CommentComponent from './components/CommentComponent';

function App() {
  return (
    <div>
      <Router>
        {/* <HeaderComponent /> */}
        <div className="container" style={{maxWidth:'50%'}}>
          <Switch>
            <Route path="/" exact component={CommentComponent}></Route>
            <Route path="/comment" component={CommentComponent}></Route>
            {/* <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route> */}
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
