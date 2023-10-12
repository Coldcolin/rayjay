import React from 'react'
import './Blog.css'
import Shape1 from "../../../src/assets/Shape1.png"
import Worker from "../../../src/assets/Worker.jpg"

export const Blog = () => {
  return (
    <div className='Blog'>
 <header className='Service-title'>
                    <div className='Service-titlewhat'>
                        <h3>See our Latest</h3>
                        <h3>Blog Post</h3>


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

                <main className='blogs'>
              <div className='leftblogside'></div>
              <div className='middleblogside'>
                <div className='blogchannels'>
                  <main className='blogchannelsimage'>
                    <img src={Worker} alt="" />
                  </main>
                  <main className='blogchannelstext'>
                    <div className='blogchannelstext1'><h4>Rayjay</h4> <h4>industry</h4></div>
                    <div className='blogchannelstext2'><p>Sectors. With her multinational perspective.</p></div>
                    <div className='blogchannelstext3'><p>Rayjay Multinational Company Limited born out of the demand for quality alternative
                            within</p></div>
                    <div className='blogchannelstext4'>
                      <a href="">Read More</a>
                    </div>
                  </main>
                </div>

                <div className='blogchannels'>
                  <main className='blogchannelsimage'>
                    <img src={Worker} alt="" />
                  </main>
                  <main className='blogchannelstext'>
                    <div className='blogchannelstext1'><h4>Rayjay</h4> <h4>industry</h4></div>
                    <div className='blogchannelstext2'><p>Sectors. With her multinational perspective.</p></div>
                    <div className='blogchannelstext3'><p>Rayjay Multinational Company Limited born out of the demand for quality alternative
                            within</p></div>
                    <div className='blogchannelstext4'>
                      <a href="">Read More</a>
                    </div>
                  </main>
                </div>

                <div className='blogchannels'>
                  <main className='blogchannelsimage'>
                    <img src={Worker} alt="" />

                  </main>
                  <div className='square'></div>
                  <main className='blogchannelstext'>
                    <div className='blogchannelstext1'><h4>Rayjay</h4> <h4>industry</h4></div>
                    <div className='blogchannelstext2'><p>Sectors. With her multinational perspective.</p></div>
                    <div className='blogchannelstext3'><p>Rayjay Multinational Company Limited born out of the demand for quality alternative
                            within</p></div>
                    <div className='blogchannelstext4'>
                      <a href="">Read More</a>
                    </div>
                  </main>
                </div>
              </div>
              <div className='rightblogside'>
                <div pointercirle>{"<"}</div>
              </div>
                </main>
    </div>
  )
}
