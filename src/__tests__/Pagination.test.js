import { render, screen, fireEvent } from "@testing-library/react";
import Paginate from "./../components/Pagination";
describe("Test in <Pagination /> Component", () => {
  test("Should show next element", () => {
    const { getByText } = render(<Paginate next="nexturl" prev="prevurl" />);
    getByText("Next");
  });
  test("Should show previous element", () => {
    const { getByText } = render(<Paginate prev="prevurl" />);

    getByText("Previous");
  });
  test("Should should next and prev elements", () => {
    const { getByText } = render(<Paginate next="nexturl" prev="prevurl" />);
    getByText("Next");
    getByText("Previous");
  });
});
