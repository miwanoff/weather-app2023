import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/images/logo.png";
import moment from 'moment';

const api = {
  key: "45320eb98dd32e71513cf76378fc81e7",
  base: "http://api.openweathermap.org/data/2.5/",
  icon: "https://openweathermap.org/img/w",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div className="container">
      <Header className="alert alert-warning mt-4 p-5 rounded text-center" />
      <div className="row">
        <div className="col-md-4 col-sm-12 my-3">
          Today: {moment().format("dddd")} {moment().format("LL")}
        </div>
      </div>
      <div className="row">
        <div className="search-panel col-sm-12 col-md-4 my-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

const Image = (props) => {
  return <img src={props.src} alt="logo" style={{ width: "100px" }} />;
};

const Header = (props) => {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1>Weather</h1>
    </div>
  );
};

export default App;
