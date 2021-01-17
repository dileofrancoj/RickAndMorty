import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { FavoritesContext } from "./../contexts/Favorites";

import Favorite from "./Favorite";
const Aside = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <Col
        className="p-4 text-center m-auto"
        md={4}
        style={{ position: "fixed" }}
      >
        <Row className="justify-content-center">
          <h4>Favoritos</h4>
          {favorites.length
            ? favorites.map((favorite) => (
                <Favorite key={favorite.id} {...favorite} />
              ))
            : null}
        </Row>
      </Col>
    </>
  );
};

export default Aside;
