import React , {useEffect} from 'react'
import "./Hero.css";
import Typed from "typed.js";
import hero from "../../assets/hero.png"






const Hero = () => {

    useEffect(() => {
        var typed = new Typed(".running-text", {
        //   strings: ["Your", "Own", "Partner"],
        strings: ["Franchizerz"],

          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);





  return (
    <div className='hero'>
        <div className='hero-content' id='box-1'>
        <h1>Welcome To  <span className='running-text'></span></h1>
    
          {/* <h1>Welcome To  <span>F</span>ranchizerz</h1> */}
          {/* <h3> <span className='running-text'></span></h3> */}
          <h2>
          Join our thriving network of entrepreneurs and unlock your potential for success. 
          With our proven business model and unwavering support, the sky's the limit. 
          Start your journey today
          </h2>
          <button className='btn' type='submit'>Know More About Us </button>
        </div>
        <div className='hero-content' id='box-2'>

        <img src={hero} className='_animated' alt='hero-image' />

        </div>
    </div>
  )
}

export default Hero
