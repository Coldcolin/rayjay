import React from 'react'
import "./Portfoilo.css"
import {RiCrossFill} from "react-icons/ri"
import Worker from "../../../assets/Worker.jpg"
import testi1 from "../../../assets/testi1.png"
import videobg from "../../../assets/videobg.jpg"

export const Portfoilo = () => {
    return (
        <>
        <section className='Portfoilo'>
            <main className='Portfoilo-mainContainer'>
                <div className='Portfoilo-mainContainerleft'>
                    <div className='portfoilo-title'><p>Our Portfolio Is Our Inspiration
                    </p></div>
                    <div className='portfoilo-text'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p></div>
                    <div className='portfoilo-btn'><button>See All Portfolios</button></div>
                </div>
                <div className='Portfoilo-mainContainermiddle'>
                    
                    <div className='portfoilo-images'>
                        <img src={Worker} alt="" />
                        <div className='portfoilo-imageshover'></div>
                    </div> 
                    <div className='portfoilo-images'>
                        <img src={Worker} alt="" />
                        <div className='portfoilo-imageshover'></div>
                    </div>
                     <div className='portfoilo-images'>
                        <img src={Worker} alt="" />
                        <div className='portfoilo-imageshover'><RiCrossFill size={17} color='90'/></div>
                    </div>                   
                </div>
                <div className='Portfoilo-mainContainerright'></div>
                            </main>

                            <div  className='portfoilo-nextcontainer'>
                                <div className='portfoilo-next'></div>
                                <div className='portfoilo-next'></div>
                            </div>
                           
        </section>
         <main className='video-part'>
                <div className='video-partcontainer'>
                    <div className='video-partcontainerleft'>
                        <main className='video-video'>
                            <img src={videobg} alt="" />
                        </main>
                        <main className='video-videodown'>
                            <h3>
                            <h1>For Emergency Contact Only</h1>
                            +8803456788465
                            </h3>
                        </main>
                    </div>
                    <div className='video-partcontainerright'>
                        <div className='video-up'>
                            <article className='video-upcircle'><img src={testi1} alt="" /></article>
                        </div>
                        <div className='video-middle'>
                            <p>
                            A standpoint for accountability and trustworthy service delivery
                cutting across West Africa Region  servicing the Oil & Gas,
                Marine and Construction Sectors.
                            </p>
                        </div>
                        <div className='video-down'>
                            <div className='video-downup'>
                            <h2> Francis mary Faith</h2>
                            <h5>front End develover</h5>
                            </div>
                            <div  className='video-downdown'>
                                <div className='video-carose'></div>
                                <div className='video-carose'></div>
                                <div className='video-carose'></div>
                            </div>
                        </div>
                    </div>
                </div>
         </main>
        </>
    )
}
