import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Datesearch from "./Datesearch";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Datesearch />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you{" "}
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;