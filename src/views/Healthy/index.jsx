import React from "react";
import UpBar from "../../components/UpBar";
import CardFood from "../../components/CardFood";
import "./styles.scss";

import Food1 from "../../assets/Images/food-1.svg";
import Food2 from "../../assets/Images/food-2.svg";
import Food3 from "../../assets/Images/food-3.svg";
import Food4 from "../../assets/Images/food-4.svg";

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
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </div>

      <div className="container-best">
        <h2 className="title-best">Our Best Recipes</h2>
        <p className="paragraph-one">
          Far far away, behind the word mountains, far from the countries
        </p>
        <p className="paragraph-two">
          Vokalia and Consonantia, there live the blind texts
        </p>

        <div className="card-food">
          <CardFood image={Food1} description="Broccoli Salad with Bacon" />
          <CardFood image={Food2} description="Classic Beef Burgers" />
        </div>

        <div className="card-food">
          <CardFood image={Food3} description="Classic Potato Salad" />
          <CardFood image={Food4} description="Cherry Cobbler on the Grill" />
        </div>
      </div>
    </>
  );
}

export default Healthy;
