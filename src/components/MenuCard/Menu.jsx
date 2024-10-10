import { useState, useRef } from 'react';
import s from './Menu.module.css';
import ArrowLeft from '../../images/arrowLeft.svg';
import ArrowRight from '../../images/arrowRight.svg';
import CloseIcon from "../../images/closeIcon.svg";

const Menu = ({ menuPhotos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = menuPhotos.map(photo => ({
    url: photo.url,
    alt: photo.description,
  }));

  const handleNext = () => {
    const container = document.getElementById('imageContainer2');
    const image = container.querySelector('img');
    const imageWidth = image.offsetWidth; // Get the exact width of the image
    const containerPadding = parseInt(window.getComputedStyle(container).paddingLeft); // Account for any padding
    const screenWidth = window.innerWidth; // Get screen width
  
    // Check if the screen width is below the mobile threshold (e.g., 556px)
    if (screenWidth <= 556) {
      // Scroll the exact width of one image on mobile, including padding
      container.scrollBy({ left: imageWidth + containerPadding, behavior: 'smooth' });
    } else {
      // Default scroll amount on larger screens (e.g., 300px)
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const handlePrev = () => {
    const container = document.getElementById('imageContainer2');
    const image = container.querySelector('img');
    const imageWidth = image.offsetWidth; // Get the exact width of the image
    const containerPadding = parseInt(window.getComputedStyle(container).paddingLeft); // Account for any padding
    const screenWidth = window.innerWidth; // Get screen width
  
    // Check if the screen width is below the mobile threshold (e.g., 556px)
    if (screenWidth <= 556) {
      // Scroll back the exact width of one image on mobile, including padding
      container.scrollBy({ left: -(imageWidth + containerPadding), behavior: 'smooth' });
    } else {
      // Default scroll amount on larger screens (e.g., 300px)
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleModalNext = () => {
    if (selectedImage !== null && selectedImage + 1 < images.length) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleModalPrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      <div className={s.mainContainer}>
      <div className={s.headContainer}>
          <div className={s.headTop}></div>
          <p className={s.headText}>Menu</p>
          <div className={s.headBottom}></div>
        </div>
        <div className={s.subContainer}>
          <button onClick={handlePrev} className={s.navBtn}>
            <ArrowLeft alt="Previous" className={s.arrowIcon} />
          </button>
          <div id="imageContainer2" className={s.imageContainer}>
            {images.map((image, index) => (
              <div key={index} className={s.imageWrapper}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className={s.menuImage}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
          <button onClick={handleNext} className={s.navBtn}>
            <ArrowRight alt="Next" className={s.arrowIcon} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className={s.modalOverlay}>
          <div className={s.modal}>
            <button className={s.modalCloseBtn} onClick={handleCloseModal}>
              <CloseIcon className={s.modalCloseIcon} alt="Close" />
            </button>
            <div className={s.modalContent}>
              <button className={s.modalNavBtn} onClick={handleModalPrev} disabled={selectedImage === 0}>
                <ArrowLeft alt="Previous" className={s.modalArrowIcon} />
              </button>
              <img src={images[selectedImage].url} alt={images[selectedImage].alt} className={s.modalImage} />
              <button className={s.modalNavBtn} onClick={handleModalNext} disabled={selectedImage === images.length - 1}>
                <ArrowRight alt="Next" className={s.modalArrowIcon} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
