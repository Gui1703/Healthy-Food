import UpBar from "../../components/UpBar";
import CardBlog from "../../components/CardBlog";
import "./styles.scss";

import Image1 from "../../assets/Images/image-1.svg";
import Image2 from "../../assets/Images/image-2.svg";
import Image3 from "../../assets/Images/image-3.svg";
import Image4 from "../../assets/Images/image-4.svg";

import Profile1 from "../../assets/Images/profile-1.jpg";
import Profile2 from "../../assets/Images/profile-2.jpg";
import Profile3 from "../../assets/Images/profile-3.jpg";
import Profile4 from "../../assets/Images/profile-4.jpg";

function Healthy() {
  return (
    <>
      <UpBar />
      <div className="container-blog">
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

        <div className="card-blog">
          <CardBlog
            image={Image1}
            description="Quick-start guide to nuts and seeds"
            profile={Profile1}
            name="Kevin Ibrahim"
          />
          <CardBlog
            image={Image2}
            description="Nutrition: Tips for Improving Your Health"
            profile={Profile2}
            name="Mike Jackson"
          />
          <CardBlog
            image={Image3}
            description="The top 10 benefits of eating healthy"
            profile={Profile3}
            name="Bryan McGregor"
          />
          <CardBlog
            image={Image4}
            description="What your plate is without healthy food"
            profile={Profile4}
            name="Hugo Weaving"
          />
        </div>
      </div>
    </>
  );
}

export default Healthy;
