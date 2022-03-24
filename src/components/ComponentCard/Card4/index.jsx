import Image4 from "../../../assets/Images/image-4.svg";
import Profile4 from "../../../assets/Images/profile-4.jpg";
import CardBlog from "../../CardBlog";

function Card4() {
  return (
    <CardBlog
      image={Image4}
      description="What your plate is without healthy food"
      profile={Profile4}
      name="Hugo Weaving"
    />
  );
}

export default Card4;
