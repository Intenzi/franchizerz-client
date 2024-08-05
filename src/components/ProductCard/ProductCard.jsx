import { useState } from 'react';
import styles from '../ProductCard/ProductCard.module.css'

const data1 = [
  { id: 1, name: 'Chilli Chatkara',title:'Food Beverage',image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  
  { id: 2, name: 'Mcdonalds',title:'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 3, name: 'Star Bucks',title:'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 4, name: 'KFC',title:'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 5, name: 'Prestige',title:'Retail', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 6, name: 'Figaro Italian Pizza',title:'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 7, name: 'Captain Sam',title:'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 8, name: 'New York Pizzeria',title:'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  
  
];
const ProductCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data1.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data1.length - 1 : prev - 1));
  };


  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headContainer}>
        <p className={styles.headText}>Top Categories</p>
      </div>
      <div className={styles.sliderContent}>
        {data1.map((item, index) => (
          <div
            key={item.id}
            className={styles.sliderItem}
            style={{
                transform: `translateX(-${currentSlide * 86}%)`,
              }}
          >
            <div className={styles.imageContainer}>
            <img src={item.image} alt={item.name} className={styles.brandImage} />
            </div>
            <h3 className={styles.itemName}>{item.name}</h3>
            <p className={styles.itemDesc}>{item.title}</p>
          </div>
        ))}
       
           
       
        
      </div>
      <div className={styles.navigationButtons}>
        <button onClick={prevSlide} className={styles.prevButton}>Previous</button>
        <button onClick={nextSlide} className={styles.nextButton}>Next</button>
      </div>
    </div>
  );
}

export default ProductCard;
