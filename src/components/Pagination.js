import { Pagination } from "react-bootstrap";
const Paginate = ({ next, prev, handlerUrl }) => {
  const nextUrl = () => {
    const [, url] = next.split("?");
    console.log(url);
    handlerUrl(url);
  };
  const prevUrl = () => {
    const [, url] = prev.split("?");
    handlerUrl(url);
  };
  return (
    <Pagination>
      {prev && <Pagination.Prev onClick={prevUrl} />}
      {next && <Pagination.Next onClick={nextUrl} />}
    </Pagination>
  );
};

export default Paginate;
