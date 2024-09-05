import React, { useState, useEffect } from 'react';
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

    const [visibleItems, setVisibleItems] = useState([]);
    const [itemsToLoad, setItemsToLoad] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [newItems, setNewItems] = useState([]);

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
        setVisibleItems(allData.slice(0, itemsToLoad));
    }, [itemsToLoad]);

    const loadMoreItems = () => {
        setIsLoading(true);
        setTimeout(() => {
            const newItems = allData.slice(visibleItems.length, visibleItems.length + itemsToLoad);
            setVisibleItems((prevItems) => [...prevItems, ...newItems]);
            setNewItems(newItems.map((item) => item.id));
            setIsLoading(false);
        }, 1000);
    };
    return (
        <div className={s.mainContainer}>
            <div className={s.headContainer}>
                <div className={s.headTop}></div>
                <p className={s.headText}>TOP CHOICES</p>
                <div className={s.headBottom}></div>
            </div>
            <div className={s.gridContainer}>
                {visibleItems.map((item) => (
                    <div
                        key={item.id}
                        className={`${s.card} ${newItems.includes(item.id) ? s.fadeIn : ''}`}
                    >
                        <img src={item.image} alt={item.name} className={s.image} />
                        <p className={s.name}>{item.name}</p>
                        <p className={s.category}>{item.category}</p>
                    </div>
                ))}
            </div>
            {visibleItems.length < allData.length && (
                <button className={s.load} onClick={loadMoreItems} disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <div className={s.spinner}></div>Loading...
                        </>
                    ) : (
                        'LOAD MORE'
                    )}
                </button>
            )}
        </div>
    );
};

export default TopChoices;
