import { Col, Row } from "react-bootstrap";

const ForeCast = ({ futureWeather }) => {
  console.log(futureWeather[0]);
  return (
    <Row className="mt-4 gx-2">
      {futureWeather.slice(0, 10).map(timeStamp => (
        <Col key={timeStamp.dt}>
          <div className="rounded-circle next-up d-flex flex-column justify-content-center text-bg-warning text-center">
            <p className="m-3">
              <b>{timeStamp.dt_txt.slice(11, 16)}</b> {timeStamp.weather[0].main}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ForeCast;
