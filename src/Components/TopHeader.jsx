import Logo from "../../src/assets/Logo.png"
import {BsFillTelephoneFill}  from "react-icons/bs"
import { MdEmail}  from "react-icons/md"


const TopHeader = () => {
  return (
    <div className="top-header">
      <main className="top-headerwrapper">
      <div className="top-logo">
        <img src={Logo} alt="" /> 
        <h3>RMC Ltd</h3>
      </div>
      <div className="top-companycontact">
        <span>
          <BsFillTelephoneFill/>
          <p>+2347012315432</p>
        </span>
        <span>
        <MdEmail/>
          <p>+2347012315432</p>
        </span>

        <button className="GET-QUOTE"> GET A QUOTE</button>
      </div>

      </main>
      
    </div>
  )
}

export default TopHeader