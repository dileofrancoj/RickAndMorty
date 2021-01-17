import { useContext } from "react";
import { FavoritesContext } from "./../contexts/Favorites";
import { Col, Card, Button } from "react-bootstrap";

const Character = ({ id, name, status, species, gender, image, origin }) => {
  const { favorites, add } = useContext(FavoritesContext);

  const addFavorite = () => {
    const character = {
      id,
      name,
      status,
      species,
      gender,
      image,
      origin,
    };
    add(character);
  };
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
          <i
            onClick={addFavorite}
            className="far fa-star mt-3 d-block "
            style={{ cursor: "pointer" }}
          ></i>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
