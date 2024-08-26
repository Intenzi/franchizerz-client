import { useState, useRef } from 'react';
import s from './Menu.module.css';
import ArrowLeft from '../../images/arrowLeft.svg';
import ArrowRight from '../../images/arrowRight.svg';
import CloseIcon from "../../images/closeIcon.svg";

const Menu = ({ menuPhotos }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageContainerRef = useRef(null);

  const images = menuPhotos.map(photo => ({
    url: photo.url,
    alt: photo.description,
  }));

  const handleNext = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 300, // Adjust this value based on your image width
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -300, // Adjust this value based on your image width
        behavior: 'smooth',
      });
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
        <div className={s.headTextContainer}>
          <p className={s.headText}>Menu</p>
        </div>
        <div className={s.subContainer}>
          <button onClick={handlePrev} className={s.navBtn}>
            <ArrowLeft alt="Previous" className={s.arrowIcon} />
          </button>
          <div id="imageContainer" className={s.imageContainer}>
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
