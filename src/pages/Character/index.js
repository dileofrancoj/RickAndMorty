import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";

import { useFetch } from "./../../hooks/useFetch";
import Aside from "./../../components/Aside";
import Loading from "./../../components/Loading";
import Single from "./Single";
const Character = () => {
  const { id } = useParams();
  console.log(id);
  const [character, fetching] = useFetch(`character/${id}`);
  return (
    <>
      {fetching && <Loading />}
      <Row className="m-0 p-3">
        <Aside />
        {character ? <Single character={character} /> : null}
      </Row>
    </>
  );
};

export default Character;