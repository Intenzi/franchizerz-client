import { useState, useEffect } from 'react';
import s from './Menu.module.css';
import ArrowLeft from '../../images/arrowLeft.svg';
import ArrowRight from '../../images/arrowRight.svg';

const Menu = ({ menuPhotos }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesPerPage, setImagesPerPage] = useState(4);

  const images = menuPhotos.map(photo => ({
    url: photo.url,
    alt: photo.description,
  }));

  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth < 730) {
        setImagesPerPage(1);
      } else if (window.innerWidth < 1100) {
        setImagesPerPage(1);
      } else if (window.innerWidth < 1490) {
        setImagesPerPage(2);
      } else {
        setImagesPerPage(3);
      }
    };

    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);

    return () => {
      window.removeEventListener('resize', updateImagesPerPage);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + imagesPerPage < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(startIndex + index);
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
        <div>
          <p className={s.headText}>Menu</p>
        </div>
        <div className={s.subContainer}>
          <button onClick={handlePrev} className={s.navBtn} disabled={startIndex === 0}>
            <ArrowLeft className={s.arrowIcon} />
          </button>
          <div className={s.imageContainer}>
            {images.slice(startIndex, startIndex + imagesPerPage).map((image, index) => (
              <div key={index} className={s.imageWrapper}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className={s.menuImage}
                  onClick={() => {
                    handleImageClick(index);
                  }}
                />
              </div>
            ))}
          </div>
          <button onClick={handleNext} className={s.navBtn} disabled={startIndex + imagesPerPage >= images.length}>
            <ArrowRight className={s.arrowIcon} />
          </button>
        </div>
      </div>
      {selectedImage !== null && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleModalPrev} className={s.modalNavBtn} disabled={selectedImage === 0}>
              <ArrowLeft className={s.modalArrowIcon} />
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className={s.modalImage}
            />
            <button onClick={handleModalNext} className={s.modalNavBtn} disabled={selectedImage + 1 >= images.length}>
              <ArrowRight className={s.modalArrowIcon} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
