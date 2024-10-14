import React from 'react';
import styles from './BrandPage.module.css';

const brands = [
  { name: 'KK Supermart', image: 'src/images/image.png', location: 'MG Road' },
  { name: 'Amber Store', image: 'src/images/image.png', location: 'Rajiv Chowk' },
  { name: 'Aashirvad Store', image: 'src/images/image.png', location: 'Noida Sec 15' },
  { name: '24Seven', image: 'src/images/image.png', location: 'Saket' },
  { name: 'Daily Needs', image: 'src/images/image.png', location: 'Malviya Nagar' },
  { name: 'Spencer\'s', image: 'src/images/image.png', location: 'Mayur Vihar' },
  { name: 'AY Stores', image: 'src/images/image.png', location: 'Lajpat Nagar' },
  { name: 'Nature\'s Basket', image: 'src/images/image.png', location: 'South Extension' },
  { name: 'Fresh Mart', image: 'src/images/image.png', location: 'Connaught Place' },
  { name: 'Big Store', image: 'src/images/image.png', location: 'Lajpat Nagar' },
  { name: 'Fresh Hub', image: 'src/images/image.png', location: 'Dwarka' },
  { name: 'City Grocers', image: 'src/images/image.png', location: 'Gurgaon' },
  { name: 'Corner Store', image: 'src/images/image.png', location: 'Vasant Vihar' },
  { name: 'SuperBazaar', image: 'src/images/image.png', location: 'South Delhi' },
  { name: 'Green Veggies', image: 'src/images/image.png', location: 'Model Town' }
];

const BrandPage = () => {
  return (
    <div className={styles.brandPage}>
      <h1 className={styles.heading}>Brands</h1>
      <div className={styles.gridContainer}>
        {brands.map((brand, index) => (
          <div className={styles.brandCard} key={index}>
            <img src={brand.image} alt={brand.name} className={styles.brandImage} />
            <h3 className={styles.brandName}>{brand.name}</h3>
            <p className={styles.brandLocation}>{brand.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
