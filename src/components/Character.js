import { useContext } from "react";
import { Link } from "react-router-dom";
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

  const isFavorite = () => !!favorites.find((favorite) => favorite.id === id);

  return (
    <Col md={4} sm={12} className="mt-3 mb-3" style={{ width: "330px" }}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {name} - {species}
          </Card.Title>
          <Card.Text>
            Status: {status} - gender: {gender} - origin: {origin.name}
          </Card.Text>
          <Link to={`/character/${id}`}>
            <Button variant="success" block>
              Ver más
            </Button>
          </Link>
          {isFavorite() ? (
            <i className={`fas fa-star mt-3 d-block text-warning`}></i>
          ) : (
            <i
              onClick={addFavorite}
              style={{ cursor: "pointer" }}
              className={`fas fa-star mt-3 d-block text-dark" `}
            ></i>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
