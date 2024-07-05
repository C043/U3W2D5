import { Badge } from "react-bootstrap";

const ForeCast = ({ futureWeather }) => {
  console.log(futureWeather[0]);
  return futureWeather.map(timeStamp => (
    <Badge key={timeStamp.dt} bg="warning" className="text-bg-warning d-block my-2">
      <b>{timeStamp.dt_txt}</b> {"--->"} {timeStamp.weather[0].main}
    </Badge>
  ));
};

export default ForeCast;
