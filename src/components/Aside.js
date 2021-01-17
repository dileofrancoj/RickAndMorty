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
        className="p-4 text-center m-auto vh-100"
        md={4}
        style={{ position: "fixed", overflow: "scroll" }}
      >
        <Row className="justify-content-center">
          <h4>Favoritos</h4>
          {favorites.length
            ? favorites.map((favorite) => (
                <Favorite
                  key={favorite.id}
                  {...favorite}
                  removeFavorite={removeFavorite}
                />
              ))
            : null}
        </Row>
      </Col>
    </>
  );
};

export default Aside;
