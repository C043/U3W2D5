const LocationHeader = ({ weather }) => {
  return (
    <>
      <h1 className="my-5">{weather.name}</h1>
      <p>{weather.weather[0].main}</p>
    </>
  );
};

export default LocationHeader;
