import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.myApp} alt="..." className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, Cum voluptas, eveniet rerum
            aspernatur temporibus ullam magnam labore officia iusto nobis,
            aliquid debitis minima hic amet perferendis dolor libero nemo
            voluptatibus aliquam quae?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tryme.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @TryMe.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
