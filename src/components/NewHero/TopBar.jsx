import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar bg-black h-[90px] sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-0 h-full flex items-center">
        <div className="flex justify-between items-center w-full h-full">
          <div className="logo flex-shrink-0 text-left h-full flex items-center">
            <a href="index.html">
              <h1 className="text-gold font-extrabold text-4xl md:text-6xl leading-[55px] m-0" style={{ fontFamily: 'EB Garamond, serif' }}>Franchizerz</h1>
            </a>
          </div>
          <div className="top-bar-right flex items-center justify-end flex-grow h-full">
            <div className="text flex flex-col items-center justify-center px-3 md:px-5 border-l border-white/17 h-full">
              <h2 className="text-white text-base md:text-2xl font-medium m-0" style={{ fontFamily: 'Roboto, sans-serif' }}>8:00 - 9:00</h2>
              <p className="text-white text-xs md:text-sm m-0" style={{ fontFamily: 'Roboto, sans-serif' }}>Opening Hour Mon - Fri</p>
            </div>
            <div className="text flex flex-col items-center justify-center px-3 md:px-5 border-l border-white/17 h-full">
              <h2 className="text-white text-base md:text-2xl font-medium m-0" style={{ fontFamily: 'Roboto, sans-serif' }}>+123 456 7890</h2>
              <p className="text-white text-xs md:text-sm m-0" style={{ fontFamily: 'Roboto, sans-serif' }}>Call Us For Free Consultation</p>
            </div>
            <div className="social flex font-size-0 h-full">
              <a href="https://freewebsitecode.com/" className="w-[40px] md:w-[60px] h-full flex items-center justify-center text-white border-r border-l border-white/17 text-[18px] md:text-[22px] hover:text-gold hover:bg-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://facebook.com/freewebsitecode" className="w-[40px] md:w-[60px] h-full flex items-center justify-center text-white border-r border-white/17 text-[18px] md:text-[22px] hover:text-gold hover:bg-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://freewebsitecode.com/" className="w-[40px] md:w-[60px] h-full flex items-center justify-center text-white border-r border-white/17 text-[18px] md:text-[22px] hover:text-gold hover:bg-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://freewebsitecode.com/" className="w-[40px] md:w-[60px] h-full flex items-center justify-center text-white border-r border-white/17 text-[18px] md:text-[22px] hover:text-gold hover:bg-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos" className="w-[40px] md:w-[60px] h-full flex items-center justify-center text-white border-r border-white/17 text-[18px] md:text-[22px] hover:text-gold hover:bg-white">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;


