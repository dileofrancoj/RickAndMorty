import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);
  if (!!auth) return <Route {...rest} component={Component} />;
  return <Redirect to="/login" />;
};

export default PrivateRoute;
