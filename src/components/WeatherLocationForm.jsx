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
      <Form className="mt-5" onSubmit={e => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={location}
            placeholder="Enter Location"
            onChange={e => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default WeatherLocationForm;
