const LocationHeader = ({ weather }) => {
  return (
    <div className="d-flex flex-column">
      <h1 className="mt-5">{weather.name}</h1>
      <p className="fs-1 m-0">{Math.floor(weather.main.temp)}C°</p>
      <p className="fs-4 m-0">
        {weather.weather[0].main}
        <span>
          <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt="" />
        </span>
      </p>
    </div>
  );
};

export default LocationHeader;
