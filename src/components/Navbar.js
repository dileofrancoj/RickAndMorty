/* React at the top */
import { useContext } from "react";

import { useHistory } from "react-router-dom";

/* Bootstrap */
import { Button, Navbar } from "react-bootstrap";

/* Personal Context */
import { AuthContext } from "../contexts/Auth";
const Nav = () => {
  const history = useHistory();
  const { auth, exit } = useContext(AuthContext);

  const logout = () => {
    exit();
    history.push("/login");
  };
  return (
    <Navbar className="p-3">
      <Navbar.Brand>Bienvenido, {auth.name}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button variant={"dark"} onClick={logout}>
            Logout
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
