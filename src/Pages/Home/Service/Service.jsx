import React from 'react'
import './Service.css'
import Shape1  from "../../../assets/Shape1.png"
import mechanicalengineering from "../../../assets/mechanicalengineering.jpg"
import mechanicalengineering2 from "../../../assets/mechanicalengineering2.jpg"
import mechanicalengineering3 from "../../../assets/mechanicalengineering3.jpg"
import mechanicalengineering4 from "../../../assets/mechanicalengineering4.jpg"
import mechanicalengineering5 from "../../../assets/mechanicalengineering5.jpg"
import mechanicalengineering6 from "../../../assets/mechanicalengineering6.jpg"



const Service = () => {
    return (
        <section className=' Service'>
            <div className='Service-wrapper'>
                <header className='Service-title'>
                    <div className='Service-titlewhat'>
                        <h3>The services what</h3>
                        <h3>we provide</h3>
                    </div>
                    <div className='Service-titleimage'>
                        <img src={Shape1} alt="share" />
                    </div>
                    <div className='Service-titletext'>
                        <p>Rayjay Multinational Company Limited born out of the demand for quality alternative
                            within specialties service delivery in the Marine, Oil & Gas, Construction & Exploration
                            Sectors. With her multinational perspective view solving most daring challenges, a
                            100% indigenous company facilitating the local content sphere, Registered corporation
                            in Nigeria with CAC RC: 2621639 and has garner support for infrastructural
                            development in rare-sectional sectors without limitations.

                        </p></div>
                </header> 
                <section  className='Service-body'>
                <main className='Service-bodytop'>
                    <div className='Service-bodycontentboxes'>
                        <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering} alt="image" /></div>
                        <div className='Service-bodycontentboxestext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='Service-bodycontentboxes'>
                        <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering2} alt="image" /></div>
                        <div className='Service-bodycontentboxestext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='Service-bodycontentboxes'>
                        <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering3} alt="image" /></div>
                        <div className='Service-bodycontentboxestext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
             
               
                <div className='Service-bodycontentboxes'>
                        <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering4} alt="image" /></div>
                        <div className='Service-bodycontentboxestext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='Service-bodycontentboxes'>
                        <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering5} alt="image" /></div>
                        <div className='Service-bodycontentboxestext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='Service-bodycontentboxes'>
                        <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering6} alt="image" /></div>
                        <div className='Service-bodycontentboxestext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    </main>
                </section>
                </div>

                
        </section>
    )
}

export default Service