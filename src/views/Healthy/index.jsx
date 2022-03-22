import React from "react";
import UpBar from "../../components/UpBar";
import "./styles.scss";

function Healthy() {
  return (
    <>
      <div className="container-background">
        <UpBar />
        <div>
          <span className="description">Ready for Trying a new recipe?</span>
          <input
            className="input-home"
            type="text"
            placeholder="Search healthy recipes"
          />
          <button className="button-home" type="button">
            <i class="bx bx-search-alt-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Healthy;
