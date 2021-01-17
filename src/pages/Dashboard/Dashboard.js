import { useState } from "react";

import { Row } from "react-bootstrap";

/* Personal Hooks */
import { useFetch } from "./../../hooks/useFetch";
/* Personal Components */
import Title from "./../../components/Title";
import Nav from "./../../components/Navbar";
import Aside from "./../../components/Aside";
import Characters from "./../../components/Characters";

const Dashboard = () => {
  const [url, setUrl] = useState("character");
  const [data, fetching, error] = useFetch(url);

  const handlerUrl = (newUrl) => {
    const changedUrl = `character?${newUrl}`;
    setUrl(changedUrl);
  };
  return (
    <>
      <Nav />
      <Row className="m-0 p-0">
        <Title title="Dashboard" />
        <Aside />
        <Characters {...data} handlerUrl={handlerUrl} />
      </Row>
    </>
  );
};

export default Dashboard;
