import './App.css';
import Login from './components/login/login';
// import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Dashboard from "./components/dashboard/dashboard";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
