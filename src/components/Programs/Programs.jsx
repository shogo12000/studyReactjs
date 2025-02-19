import "./Programs.css";
import image1 from "../../assets/image1.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={image1} alt="" />
        <div className="caption">
          <i className="fa-brands fa-studiovinari fa-4x"></i>
          <p>Lorem ipsum dolor </p>
        </div>
      </div>
      <div className="program">
        <img src={image1} alt="" />
        <div className="caption">
          <i className="fa-solid fa-anchor fa-4x"></i>
          <p>Lorem ipsum dolor </p>
        </div>
      </div>
      <div className="program">
        <img src={image1} alt="" />
        <div className="caption">
          <i className="fa-regular fa-bookmark fa-4x"></i>
          <p>Lorem ipsum dolor </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
