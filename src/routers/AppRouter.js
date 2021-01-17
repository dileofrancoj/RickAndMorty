import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { FavoritesProvider } from "./../contexts/Favorites";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <FavoritesProvider>
          <PrivateRoute path="/dashboard" component={Dashboard} dato={"dato"} />
        </FavoritesProvider>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
