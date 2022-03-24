import Card1 from "../../components/ComponentCard/Card1";
import Card2 from "../../components/ComponentCard/Card2";
import Card3 from "../../components/ComponentCard/Card3";
import Card4 from "../../components/ComponentCard/Card4";
import "./styles.scss";

import Carousel from "react-elastic-carousel";

function Healthy() {
  return (
    <>
      <div className="container-blog" id="blog">
        <div>
          <h1 className="title-blog">The best services ready To serve you</h1>
          <p className="description-blog">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p className="description-blog">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p className="description-blog">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button className="button-blog" type="button">
            <a href="#our-blog">Know More</a>
          </button>
        </div>
      </div>

      <div className="blog">
        <h2 id="our-blog" className="title-best">
          Read Our Blog
        </h2>
        <p className="paragraph-one">
          Far far away, behind the word mountains, far from the countries
        </p>
        <p className="paragraph-two">
          Vokalia and Consonantia, there live the blind texts
        </p>

        <div className="carousel-max">
          <Carousel itemsToShow={3}>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
          </Carousel>
        </div>

        <div className="carousel-min">
          <Carousel itemsToShow={1}>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Healthy;
