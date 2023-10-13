import "./Contact.css"

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-background">
        <div>
          <h3>Contact</h3>
          <p>Home {">"} Contact</p>
        </div>
      </div>

      <div className="address-listing">
        <div className="address-listingwrapper">
          <span>
            <h1>Address:</h1>
            <p>12/30 North cfghjklkjhgfdfghjkjhgf</p>
          </span>
          <span>
            <h1>Address:</h1>
            <p>12/30 North cfghjklkjhgfdfghjkjhgf</p>
          </span><span>
            <h1>Address:</h1>
            <p>12/30 North cfghjklkjhgfdfghjkjhgf</p>
          </span>
        </div>
      </div>
      <main className="fromlocation">
          <div  className="fromlocation-wrapper">
                  <main className="from">
                    <div className="from-title">
                    <h1>Contact Form</h1>
                    <hr className="from-line"/>
                    </div>
                    <div className="contactform">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                    <input type="text" placeholder="Subject"/>
                    </div>
                    <main className="contact-message">
                       <input type="text" placeholder="Message"/>
                    </main>
                  </main>
                  <main className="location">

                  </main>
          </div>
      </main>
      <div className="contactpost">
      <button className="tbbn"> Send Now</button>
      </div>
    </div>
  )
}

export default Contact