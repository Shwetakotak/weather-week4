import React from "react";
import axios from "axios";
// import Audio from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature at ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiKey = "861fb20b505f7e96a549db90c19a5142";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <h2> Hello World from Weather </h2>
    //   <Audio color="#00BFFF" height={80} width={80} timeout={3000} />
  );
}
