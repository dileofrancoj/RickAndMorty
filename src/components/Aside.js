import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { FavoritesContext } from "./../contexts/Favorites";

import Favorite from "./Favorite";
const Aside = () => {
  const { favorites, remove } = useContext(FavoritesContext);

  const removeFavorite = (id) => {
    remove(id);
  };

  return (
    <>
      <Col
        className="text-center m-auto vh-100"
        md={4}
        style={{
          position: "fixed",
          overflow: "scroll",
        }}
      >
        <Row className="justify-content-center mb-4">
          <h4 className="text-center mb-3">Favoritos</h4>
          {favorites.length ? (
            favorites.map((favorite) => (
              <Favorite
                key={favorite.id}
                {...favorite}
                removeFavorite={removeFavorite}
              />
            ))
          ) : (
            <h4>No hay favoritos ...</h4>
          )}
        </Row>
      </Col>
    </>
  );
};

export default Aside;
