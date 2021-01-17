import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { FavoritesProvider } from "./../contexts/Favorites";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import Character from "../pages/Character";
import PrivateRoute from "./PrivateRoute";
import Nav from "./../components/Layout/Navbar";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <FavoritesProvider>
          <Nav />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/character/:id" component={Character} />
        </FavoritesProvider>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
