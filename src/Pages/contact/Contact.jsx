import React from "react";
import "./Contact.scss";
import { NavLink } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="Contact">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="./logo.png" alt="img" />
            <h1>Contact</h1>
            <div className="link">
              <NavLink className="text-white" to="/">
                <p>Home</p>
              </NavLink>
              <img className="right" src="./right.png" alt="icon" />
              <NavLink className="text-white" to="/Contact">
                <p>Contact</p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="container">
          <div className="par">
            <h1>Get In Touch With Us</h1>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="big">
            <div className="left-content">
              <div className="content1">
                <img src="./location.png" alt="icon" />
                <div className="Address">
                  <h3>Address</h3>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="content1">
                <img src="telephone.png" alt="icon" />
                <div className="Phone">
                  <h3>Phone</h3>
                  <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="content1">
                <img src="time.png" alt="icon" />
                <div className="Working Time">
                  <h3>Working Time</h3>
                  <p>
                    Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            <div className="right-content">
              <form>
                <div className="inpt">
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name" placeholder="Abc" />
                </div>
                <div className="inpt">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Abc@def.com"
                  />
                </div>
                <div className="inpt">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="This is an optional"
                  />
                </div>
                <div className="inpt ">
                  <label htmlFor="message">Message</label>
                  <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Hi! i’d like to ask about"
                    className="inpt4"
                  />
                </div>
                <button className="input-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
