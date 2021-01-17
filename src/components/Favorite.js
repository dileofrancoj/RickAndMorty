import { Col, Toast } from "react-bootstrap";
const Favorite = ({ id, name, image, status, removeFavorite }) => {
  const remove = () => removeFavorite(id);
  return (
    <Col md={5} sm={12}>
      <Toast className="mb-3 text-center" style={{ width: "250px" }}>
        <Toast.Header closeButton={false}>
          <img
            src={image}
            style={{ width: "200px" }}
            className="rounded mr-2 p-2"
            alt=""
          />
        </Toast.Header>
        <Toast.Body>
          <p>
            {name} - {status}
          </p>
          <i
            className="fas fa-trash text-danger"
            style={{ cursor: "pointer", fontSize: "1.5em" }}
            onClick={remove}
          ></i>
        </Toast.Body>
      </Toast>
    </Col>
  );
};

export default Favorite;
