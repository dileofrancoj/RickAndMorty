import { Col, Toast } from "react-bootstrap";
const Favorite = ({ id, name, status, species, gender, image, origin }) => {
  return (
    <Col md={4}>
      <Toast className="mb-3" style={{ width: "250px" }}>
        <Toast.Header closeButton={false}>
          <img
            src={image}
            style={{ width: "150px" }}
            className="rounded mr-2 p-2"
            alt=""
          />
        </Toast.Header>
        <Toast.Body>{name}</Toast.Body>
      </Toast>
    </Col>
  );
};

export default Favorite;
