import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} dato={"dato"} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
