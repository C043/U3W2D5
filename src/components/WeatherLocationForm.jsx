import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WeatherLocationForm = () => {
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/details/" + location);
  };

  return (
    <Container>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Control
            type="text"
            value={location}
            placeholder="Enter Location"
            onChange={e => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="warning" type="submit" className="d-block mx-auto">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default WeatherLocationForm;
