import React from "react";
import "./Footer.css";
import DataContact from "./DataContact";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact">
        <div className="data-contact">
          <h2>Contact Us</h2>
          <h4>Contact Info</h4>
          <DataContact
            iconContact={"/src/assets_project/location.svg"}
            infoContact={"4321 California St,San Francisco, CA 12345"}
          />
          <DataContact
            iconContact={"/src/assets_project/email.svg"}
            infoContact={"whiskas@gmail.com"}
          />
          <DataContact
            iconContact={"/src/assets_project/phone.svg"}
            infoContact={"+1 123 456 1234"}
          />
        </div>
        <div className="message">
          <h2>Send us a message</h2>
          <div className="email-name">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <textarea placeholder="Your Message"></textarea>
          <button>Enviar</button>
        </div>
      </div>
      <div className="copyright">© All Copyright 2023 by Whiskas</div>
    </div>
  );
};

export default Footer;
