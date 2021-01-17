import { Row, Col } from "react-bootstrap";
import Character from "./Character";
import Pagination from "./Pagination";
const Characters = ({ info, results, handlerUrl }) => {
  return (
    <Col md={{ span: 8, offset: 4 }} className="p-4 text-center">
      <Row>
        {results
          ? results.map((character) => (
              <Character key={character.id} {...character} />
            ))
          : null}
      </Row>
      <Pagination {...info} handlerUrl={handlerUrl} />
    </Col>
  );
};
export default Characters;
