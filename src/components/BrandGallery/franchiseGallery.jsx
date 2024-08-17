import { useState } from 'react';
import s from './franchiseGallery.module.css';
import ArrowLeft from "../../images/arrowLeft.svg";
import ArrowRight from "../../images/arrowRight.svg";

const FranchiseGallery = ({ galleryPhotos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = galleryPhotos.map(photo => ({
    url: photo.url,
    alt: photo.description,
  }));

  const handleNext = () => {
    const container = document.getElementById('imageContainer');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handlePrev = () => {
    const container = document.getElementById('imageContainer');
    container.scrollBy({ left: -300, behavior: 'smooth' });
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
        <div><p className={s.headText}>Brand Gallery</p></div>
        <div className={s.subContainer}>
          <button onClick={handlePrev} className={s.navBtn}>
            <ArrowLeft className={s.arrowIcon} />
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
            <ArrowRight className={s.arrowIcon} />
          </button>
        </div>
      </div>
      {selectedImage !== null && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleModalNext} className={s.modalNavBtn} disabled={selectedImage + 1 >= images.length}>
              <ArrowRight className={s.modalArrowIcon} />
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className={s.modalImage}
            />
            <button onClick={handleModalPrev} className={s.modalNavBtn} disabled={selectedImage === 0} >
              <ArrowLeft className={s.modalArrowIcon} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FranchiseGallery;
