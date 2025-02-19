import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [result, setResult] = useState("");

    const submitting = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(formData);
        console.log(e)
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)

        setResult("sending...")

        setTimeout(()=>{
            setResult("Successfully sent")
            e.target.reset();
            setTimeout(()=>{
                setResult("")
            },3000)
        },3000)
    }
  return (
    <div className="contact">
      <div className="contact-col">
        <h3 style={{ marginBottom: "20px" }}>
          Send us a message{" "}
          <i
            class="fa-regular fa-envelope fa-1x"
            style={{ paddingLeft: "10px" }}
          ></i>{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>
            <i className="fa-regular fa-envelope right-margin"></i>{" "}
            shogo12000@hotmail.com
          </li>
          <li>
            <i className="fa-solid fa-mobile-screen-button right-margin"></i> +1
            123-123-1234
          </li>
          <li>
            <i className="fa-solid fa-location-dot right-margin"></i> 10 Main Ave
            Vancouver
            <br /> 92606, Canada
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={(e)=>submitting(e)}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            required
          />
          <label htmlFor="" required>
            White your message
          </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit"className="btn dark-btn">Submit now <i class="fa-solid fa-arrow-right"></i></button>
        </form>
        <span>{result}</span> 
      </div>
    </div>
  );
};

export default Contact;
