import "./Campus.css";
import campus1 from "../../assets/campus1.jpg";
import campus2 from "../../assets/campus2.jpg";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={campus1} alt="" />
        <img src={campus2} alt="" />
        <img src={campus1} alt="" />
        <img src={campus2} alt="" />
      </div>
      <button className="btn dark-btn">Lorem Ipsum <i class="fa-solid fa-arrow-right fa-2x"></i> </button>
    </div>
  );
};

export default Campus;
