import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import { Button, Navbar } from "react-bootstrap";
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
