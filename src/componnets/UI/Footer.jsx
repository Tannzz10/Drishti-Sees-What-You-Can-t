
import * as FaIcons from "react-icons/fa";
export const Footers=()=>{
    return <>
    <div className="foot">
        <div className="container foot1">
            <h1>Begin your journey now !</h1>
        </div>
    </div>
     <div className="footer">
      <div className="container foot2">
        <div className="contact">
          <h1>Contact</h1>
          <p><FaIcons.FaPhone className="icon" /> +91 8824867231</p>
          <p><FaIcons.FaEnvelope className="icon" /> Drishti@gmail.com</p>
          <p><FaIcons.FaMapMarkerAlt className="icon" /> Lazyy Tower 192, Chattarpur, New Delhi</p>
        </div>
        <div className="links">
          <h1>Links</h1>
          <p>Privacy Policy</p>
          <p>Term Of Use</p>
          <div className="social-icons">
            <FaIcons.FaFacebook className="social-icon" />
            <FaIcons.FaTwitter className="social-icon" />
            <FaIcons.FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="reserved">
        <h1>All rights reserved @DRISHTI 2025</h1>
    </div>
    </>
}