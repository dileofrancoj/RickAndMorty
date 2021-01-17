import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Head from "../../components/Common/Head";
import { useFetch } from "./../../hooks/useFetch";
import Aside from "./../../components/Layout/Aside";
import Loading from "../../components/Common/Loading";
import Single from "./Single";
const Character = () => {
  const { id } = useParams();
  const [character, fetching] = useFetch(`character/${id}`);
  return (
    <>
      {fetching && <Loading />}
      <Row className="m-0 p-3">
        <Aside />
        {character ? (
          <>
            <Head title={character.name} description="personaje individual" />
            <Single character={character} />
          </>
        ) : null}
      </Row>
    </>
  );
};

export default Character;
