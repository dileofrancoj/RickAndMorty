import { useState, useContext, useEffect } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../contexts/Auth";
import { getAuthStorage } from "./../../utils/auth";
import { schema } from "./schema";

const setInitialState = { username: "", password: "" };

const Login = () => {
  const [user, setUser] = useState(setInitialState);
  const { auth, authenticate } = useContext(AuthContext);

  const history = useHistory();
  useEffect(() => {
    if (!!getAuthStorage()) history.push("/dashboard");
  }, [auth]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handlerUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = () => {
    const { username, password } = user;
    authenticate(username, password);
    history.push("/dashboard");
  };
  return (
    <Row className="justify-content-center vh-100 align-items-center m-0 p-0">
      <Col md={4} sm={12}>
        <Form onSubmit={handleSubmit(login)}>
          <Form.Group>
            <Form.Control
              ref={register}
              type="text"
              name="username"
              onChange={handlerUser}
              placeholder="Ingresa tu usuario"
            />
            <label className="text-danger">{errors.username?.message}</label>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              ref={register}
              name="password"
              onChange={handlerUser}
              placeholder="**********"
            />
          </Form.Group>
          <Button type="submit" variant="dark" className="mt-3 w-100">
            Ingresar
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
