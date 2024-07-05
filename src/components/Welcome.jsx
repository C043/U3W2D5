import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <NavLink to={"/"} type="btn" className={"h1 link-underline link-underline-opacity-0"}>
          <h1>Welcome to EpiWeather</h1>
        </NavLink>
      </div>
    </Container>
  );
};

export default Welcome;
