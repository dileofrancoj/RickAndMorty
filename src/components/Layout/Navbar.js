/* React at the top */

import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";

/* Bootstrap */
import { Navbar } from "react-bootstrap";

/* Personal Context */
import { AuthContext } from "./../../contexts/Auth";
const Nav = () => {
  const history = useHistory();
  const { auth, exit } = useContext(AuthContext);

  const logout = () => {
    exit();
    history.push("/login");
  };
  return (
    <Navbar className="p-3 bg-dark ">
      <Link to="/dashboard">
        <Navbar.Brand className="text-white">
          Bienvenido, {auth?.name}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <i
            className="fas fa-sign-out-alt  text-white fa-2x"
            onClick={logout}
          ></i>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
