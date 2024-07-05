const LocationHeader = ({ weather }) => {
  return (
    <div className="graphic d-flex flex-column justify-content-center align-items-center">
      <h2 className="m-0">{weather.name}</h2>
      <p className="temperature m-0">{Math.floor(weather.main.temp)}C°</p>
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
