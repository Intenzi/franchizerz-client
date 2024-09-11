import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import s from './TopChoices.module.css';

const TopChoices = () => {
    const allData = [
        { id: 1, name: 'Mcdonalds', category: 'Food Beverage', image: './img/857d89ea-b84b-4a23-96e4-d653c66298d2 1.jpg' },
        { id: 2, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Keto Restaurants with Low Carb Options - No Bun Please 1.jpg' },
        { id: 3, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Fortis Hiranandani Hospital, India 1.jpg' },
        { id: 4, name: 'Mcdonalds', category: 'Food Beverage', image: './img/857d89ea-b84b-4a23-96e4-d653c66298d2 1.jpg' },
        { id: 5, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Fortis Hiranandani Hospital, India 1.jpg' },
        { id: 6, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Keto Restaurants with Low Carb Options - No Bun Please 1.jpg' },
        { id: 7, name: 'Mcdonalds', category: 'Food Beverage', image: './img/857d89ea-b84b-4a23-96e4-d653c66298d2 1.jpg' },
        { id: 8, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Fortis Hiranandani Hospital, India 1.jpg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToLoad, setItemsToLoad] = useState(3);
    const autoSlideInterval = useRef(null);

    const startAutoSlide = () => {
        autoSlideInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex >= allData.length - itemsToLoad) {
                    return 0;
                }
                return prevIndex + itemsToLoad;
            });
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval.current) {
            clearInterval(autoSlideInterval.current);
        }
    };

    useEffect(() => {
        const updateItemsToLoad = () => {
            const screenWidth = window.innerWidth;
            setItemsToLoad(screenWidth <= 768 ? 2 : 3);
        };

        updateItemsToLoad();
        window.addEventListener('resize', updateItemsToLoad);

        return () => window.removeEventListener('resize', updateItemsToLoad);
    }, []);

    useEffect(() => {
        startAutoSlide();

        return () => {
            stopAutoSlide();
        };
    }, [itemsToLoad]);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToLoad, 0));
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= allData.length - itemsToLoad ? 0 : prevIndex + itemsToLoad
        );
    };

    return (
        <div
            className={s.mainContainer}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div className={s.headContainer}>
                <div className={s.headTop}></div>
                <p className={s.headText}>TOP CHOICES</p>
                <div className={s.headBottom}></div>
            </div>
            <div className={s.subContainer}>
                <button className={s.navButton} onClick={slideLeft}>
                    <ArrowBackIosIcon />
                </button>
                <div className={s.carousel}>
                    <div
                        className={s.carouselTrack}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToLoad)}%)`,
                        }}
                    >
                        {allData.map((item) => (
                            <div key={item.id} className={s.card}>
                                <img src={item.image} alt={item.name} className={s.image} />
                                <p className={s.name}>{item.name}</p>
                                <p className={s.category}>{item.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={s.navButton} onClick={slideRight}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default TopChoices;
