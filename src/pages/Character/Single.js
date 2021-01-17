import { useState } from "react";
import moment from "moment";

import { Button, Col, Image } from "react-bootstrap";

const initialState = 5;

const Single = ({ character }) => {
  const [limit, setLimit] = useState(initialState);
  return (
    <Col md={{ span: 8, offset: 4 }} className="text-center p-3 mb-4">
      <Image src={character.image} roundedCircle />
      <h3 className="mt-3">{character.name}</h3>
      <small>{moment(character.created).format("DD/MM/YYYY")}</small>
      <p>Genero: {character.gender}</p>
      <p>Estado: {character.status}</p>
      <p>Especie: {character.species}</p>
      <p>Planeta de origen: {character.origin.name}</p>
      <hr />
      <h4>Episodios:</h4>
      {character.episode.map((episode, index) => {
        if (index >= limit) return;
        return (
          <a className="d-block" href={episode}>
            {episode}
          </a>
        );
      })}
      {limit <= 10 ? (
        <Button
          className="mt-3"
          onClick={() => setLimit(character.episode.length)}
          variant={"dark"}
        >
          Ver más
        </Button>
      ) : (
        <Button
          className="mt-3"
          onClick={() => setLimit(initialState)}
          variant={"dark"}
        >
          Ver menos
        </Button>
      )}
    </Col>
  );
};

export default Single;
