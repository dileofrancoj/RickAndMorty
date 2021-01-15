import Nav from "./../../components/Navbar";
import { Row, Col } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <Nav />
      <Row>
        <Col>
          <h3 className="text-center">Dashboard</h3>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
