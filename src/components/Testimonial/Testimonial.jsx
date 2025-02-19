import "./Testimonial.css";
import campo1 from "../../assets/campus1.jpg";
import campo2 from "../../assets/campus2.jpg";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [translateX, setTranslateX] = useState(0);
  const windowx = window.innerWidth;
  let setX = -50;

  if(windowx < 800){
    setX = -75;
  }

  const slideForward = () => {
    if (translateX > setX) setTranslateX((prev) => prev - 25); 
  };

  const slideBackward = () => {
    if (translateX < 0) setTranslateX((prev) => prev + 25); 
  };

  return (
    <div className="testimonials">
      <div className="back-btn" onClick={slideForward}>
        <i class="fa-solid fa-arrow-left fa-1x"></i>
      </div>
      <div className="next-btn" onClick={slideBackward}>
        <i class="fa-solid fa-arrow-right fa-1x"></i>
      </div>

      <div className="slider">
        <ul
          style={{
            transform: `translateX(${translateX}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={campo1} alt="" />
                <div>
                  <h3>magna aliqua</h3>
                  <span>consectetur adipiscing elit</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={campo2} alt="" />
                <div>
                  <h3>magna aliqua</h3>
                  <span>consectetur adipiscing elit</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={campo1} alt="" />
                <div>
                  <h3>magna aliqua</h3>
                  <span>consectetur adipiscing elit</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={campo2} alt="" />
                <div>
                  <h3>magna aliqua</h3>
                  <span>consectetur adipiscing elit</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
