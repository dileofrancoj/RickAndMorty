import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";
describe("Test in <Login /> Component", () => {
  test("Should render user and password inputs", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    expect(getByPlaceholderText("Usuario")).toBeInTheDocument();
    expect(getByPlaceholderText("password")).toBeInTheDocument();
    getByText(/Ingresar/);
  });

  /*
  test("should press the button and fail autentication", () => {
    const failMessage = "Usuario o  incorrectos";
    const { debug, getByPlaceholderText, findByText, getByText } = render(
      <Login />
    );

    fireEvent.change(getByPlaceholderText("Usuario"), {
      target: { value: "usuarioX" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "123" },
    });
    fireEvent.click(getByText("Ingresar"));
    getByText(failMessage);
    debug();
  });
  
  */
});
