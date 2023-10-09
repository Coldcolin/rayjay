 import { useState } from "react";
 import "./Home.css";
import Service from "./Service/Service";
import { Achivment } from "./Achivment/Achivment";
import { Portfoilo } from "./Portfoilo/Portfoilo";
import { Blog } from "../Blog/Blog";

 const Home = () => {
   const images = [
    {
      id: 1,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider2.jpg",
    },
 
    {
      id: 2,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider1.jpg",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Home">
      <div
        className="Hero-Part"
        style={{
          backgroundImage: `url(${images[currentImageIndex].image})`,
        
        }}
      >
        <div className="Hero-Partwrapper">
          <div className="Hero-PartCaroselleft">
            <div className="Caroselleftblock" onClick={prevImage}>
              {"<"}
            </div>
          </div>
          <div className="Hero-PartContent">
            <span className="Quanlity">
              <h4>Our Quality is Our</h4>
            </span>
            <span className="Streight">
              <h1>Stranght, Energy, Faith</h1>
            </span>
            <span className="standpoint">
              <p>
                A standpoint for accountability and trustworthy service delivery
                cutting across West Africa Region  servicing the Oil & Gas,
                Marine and Construction Sectors.
              </p>
            </span>
            <div className="btn">
              <div className="btn1" >
                CONTACT US
              </div>
              <div className="btn2" >
                LEARN MORE
              </div>
            </div>
          </div>
          <div className="Hero-PartCaroselright">
            <div className="Caroselleftblock" onClick={nextImage}>
              {">"}
            </div>
          </div>
        </div>
      </div>
      <Service/>
      <Achivment/>
      <Portfoilo/>
      <Blog/>
    </div>
   );
 };

 export default Home;
