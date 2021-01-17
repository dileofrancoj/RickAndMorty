import { useState } from "react";

import { Row } from "react-bootstrap";

/* Personal Hooks */
import { useFetch } from "./../../hooks/useFetch";
/* Personal Components */
import Aside from "./../../components/Aside";
import Characters from "./../../components/Characters";
import Loading from "./../../components/Loading";
const Dashboard = () => {
  const [url, setUrl] = useState("character");
  const [data, fetching] = useFetch(url);

  const handlerUrl = (newUrl) => {
    const changedUrl = `character?${newUrl}`;
    setUrl(changedUrl);
  };
  return (
    <>
      {fetching && <Loading />}
      <Row className="m-0 p-3">
        <Aside />
        <Characters {...data} handlerUrl={handlerUrl} />
      </Row>
    </>
  );
};

export default Dashboard;
