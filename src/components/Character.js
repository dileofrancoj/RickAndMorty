import { Col, Card, Button } from "react-bootstrap";
const Character = ({ id, name, status, species, gender, image, origin }) => {
  return (
    <Col md={4} className="mt-3 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {name} - {species}
          </Card.Title>
          <Card.Text>
            Status: {status} - gender: {gender} - origin: {origin.name}
          </Card.Text>
          <Button variant="success" block>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
