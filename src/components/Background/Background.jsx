import video from "../../assets/video1.mp4"
import "./Background.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({ playStatus, heroCont }) => {

  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted >
        <source src={video} type="video/mp4"/>
      </video>
    );
  } else if (heroCont === 0) {
    return <img src={image1} className="background fade-in"></img>;
  } else if (heroCont === 1) {
    return <img src={image2} className="background fade-in"></img>;
  } else if (heroCont === 2) {
    return <img src={image3} className="background fade-in"></img>;
  }
};
export default Background;
