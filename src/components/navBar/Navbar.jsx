import "./Navbar.css";
import logosvg from "../../assets/logosvg.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const handleScroll = (componentId) => {
    console.log(componentId);
    
    const testimonialsSection = document.getElementById(`${componentId}`);
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    toogleMenu();
  };
  
  const toogleMenu = ()=>{
    setMobileMenu(!mobileMenu); 
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="NavDiv">
        <img src={logosvg} className="logo" />
        <h3>title</h3>
      </div>
      <ul className={mobileMenu ? "hide-mobile-menu":""}>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("programs")}>Program</li>
        <li onClick={() => handleScroll("about")}>About us</li>
        <li onClick={() => handleScroll("campus")}>Campus</li>
        <li onClick={() => handleScroll("testimonials")}>Testimonials</li>
        <li>
          <button className="btn" onClick={() => handleScroll("contact")}>Contact us</button>
        </li>
      </ul>
      <i onClick={toogleMenu} class="fa-solid fa-bars" style={{fontSize:"20px"}} ></i>
    </nav>
  );
};

export default Navbar;
