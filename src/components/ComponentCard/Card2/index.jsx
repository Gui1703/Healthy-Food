import Image2 from "../../../assets/Images/image-2.svg";
import Profile2 from "../../../assets/Images/profile-2.jpg";
import CardBlog from "../../CardBlog";

function Card2() {
  return (
    <CardBlog
      image={Image2}
      description="Nutrition: Tips for Improving Your Health"
      profile={Profile2}
      name="Mike Jackson"
    />
  );
}

export default Card2;
