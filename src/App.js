import "./index.css";
import Login from "./LoginForm";
import Admin from "./Admin";
import Engineer from "./Engineer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/engineer" component={Engineer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
