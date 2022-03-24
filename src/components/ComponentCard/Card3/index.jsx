import Image3 from "../../../assets/Images/image-3.svg";
import Profile3 from "../../../assets/Images/profile-3.jpg";
import CardBlog from "../../CardBlog";

function Card3() {
  return (
    <CardBlog
      image={Image3}
      description="The top 10 benefits of eating healthy"
      profile={Profile3}
      name="Bryan McGregor"
    />
  );
}

export default Card3;
