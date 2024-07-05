import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Location = () => {
  const params = useParams();

  const [weather, setWeather] = useState(null);

  const fetchCoordinates = async () => {
    try {
      const respCor = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          params.location +
          "&limit=1&appid=82d9b7b32adef52c6e474f1919c3254a"
      );
      if (respCor.ok) {
        const coordinates = await respCor.json();
        const lat = coordinates[0].lat;
        const lon = coordinates[0].lon;
        const resp = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            lon +
            "&units=metric&appid=82d9b7b32adef52c6e474f1919c3254a"
        );
        if (resp.ok) {
          const locationObj = await resp.json();
          setWeather(locationObj);
        } else {
          throw new Error("Errore nel secondo fetch");
        }
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  return weather ? (
    <Container>
      {" "}
      <h1>{weather.name}</h1>{" "}
    </Container>
  ) : (
    <Spinner variant="primary" />
  );
};

export default Location;
