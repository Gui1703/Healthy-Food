import Profile1 from "../../../assets/Images/profile-1.jpg"
import Image1 from "../../../assets/Images/image-1.svg";
import CardBlog from "../../CardBlog";

function Card1() {
  return (
    <CardBlog
      image={Image1}
      description="Quick-start guide to nuts and seeds"
      profile={Profile1}
      name="Kevin Ibrahim"
    />
  );
}

export default Card1;
