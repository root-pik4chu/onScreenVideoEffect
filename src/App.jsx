import { useState, useEffect, useRef } from "react";
import "./App.css";
import video from "./assets/underScribbleProject.mp4";
import img from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"
import img7 from "./assets/7.jpg"
import img8 from "./assets/8.jpg"
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const scrollContainerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  let timer = null;

  useEffect(() => {

const locomotiveScroll = new LocomotiveScroll({
  el:scrollContainerRef.current,
  smooth:true,
});

    const handleMouseMove = () => {
      clearTimeout(timer);
      setShowVideo(false);
      timer = setTimeout(() => {
        setShowVideo(true);
      }, 5000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll" , handleMouseMove)

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll" , handleMouseMove)
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
    
    <div ref={scrollContainerRef} data-scroll-container className="w-full h-screen bg-zinc-100  ">
      <div className="h-screen bl w-full  fixed top-0 left-0 z-10 mix-blend-darken  overflow-auto ">
        {showVideo && (
          <video
            muted
            
            autoPlay
            className="w-full h-full object-cover object-center pointer-events-none"
            src={video}
          />
        )}
      </div>
      <div className="relative z-0 flex items-center justify-center h-[400vh] w-full bg-zinc-100 overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full bg-zinc-100">

        <div className="col-start-2 col-end-12 w-full relative top-[10vw] overflow-hidden">
            <img  className="w-full" src={img8} alt="" />
          </div>

          <div className="col-start-2 col-end-6 w-full relative top-[10vw] overflow-hidden">
            <img  className="w-full" src={img} alt="" />
          </div>

          <div className="col-start-8 col-end-12 w-full relative top-[20vw]  overflow-hidden">
            <img  className="w-full" src={img2} alt="" />
          </div>

          <div className="col-start-2 col-end-6 w-full h-full relative top-[10vw] overflow-hidden">
            <img  className="w-full" src={img3} alt="" />
          </div>

          <div className="col-start-7 col-end-12 w-full relative top-[20vw] overflow-hidden">
            <img  className="w-full" src={img4} alt="" />
          </div>

          <div className="col-start-2 col-end-5 w-full relative top-[12vw] overflow-hidden">
            <img  className="w-full" src={img5} alt="" />
          </div>

          <div className="col-start-8 col-end-12 w-full relative top-[0vw] overflow-hidden">
            <img  className="w-full" src={img6} alt="" />
          </div>

         

          



        </div>
        <div className=""></div>
      </div>
    </div>
    
    </>
  );
}

export default App;
