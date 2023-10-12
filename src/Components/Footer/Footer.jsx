import "./Footer.css"
import {AiOutlineFacebook} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footermaindiv">
      <div className="footerwrapper">
        <div className="footerone">
          <div className="footer-logodiv"></div>
          <div className="logo-writeup">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="footer-icons">
            <AiOutlineFacebook size={40} color='#FFFFFF'/>
          </div>
        </div>
        <div className="footertwo"></div>
        <div className="footerthree"></div>
        <div className="footerfour"></div>
      </div>
    </div>
  )
}

export default Footer