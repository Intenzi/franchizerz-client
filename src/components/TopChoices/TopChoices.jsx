// import React, { useState, useEffect, useRef } from 'react';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import s from './TopChoices.module.css';

// const TopChoices = () => {
//     const allData = [
//         { id: 1, name: 'Mr Sandwich', category: 'Food Beverage', image: '/img/MrSandwich.jpg' },
//         { id: 2, name: 'Lassi Story', category: 'Food Beverage', image: '/img/LassiStory.jpeg' },
//         { id: 3, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Fortis Hiranandani Hospital, India 1.jpg' },
//         { id: 4, name: 'Mcdonalds', category: 'Food Beverage', image: './img/857d89ea-b84b-4a23-96e4-d653c66298d2 1.jpg' },
//         { id: 5, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Fortis Hiranandani Hospital, India 1.jpg' },
//         { id: 6, name: 'Mcdonalds', category: 'Food Beverage', image: './img/Keto Restaurants with Low Carb Options - No Bun Please 1.jpg' },
//         { id: 7, name: 'Mr Sandwich', category: 'Food Beverage', image: '/img/MrSandwich.jpg' },
//         { id: 8, name: 'Lassi Story', category: 'Food Beverage', image: '/img/LassiStory.jpeg' },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsToLoad, setItemsToLoad] = useState(3);
//     const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);
//     const autoSlideInterval = useRef(null);
//     const touchScrolling = useRef(false); // To track if the user is touch-scrolling

//     const startAutoSlide = () => {
//         if (!isSmallScreen) {
//             autoSlideInterval.current = setInterval(() => {
//                 if (!touchScrolling.current) {
//                     setCurrentIndex((prevIndex) => {
//                         if (prevIndex >= allData.length - itemsToLoad) {
//                             return 0;
//                         }
//                         return prevIndex + itemsToLoad;
//                     });
//                 }
//             }, 4000);
//         }
//     };

//     const stopAutoSlide = () => {
//         if (autoSlideInterval.current) {
//             clearInterval(autoSlideInterval.current);
//         }
//     };

//     useEffect(() => {
//         const updateItemsToLoad = () => {
//             const screenWidth = window.innerWidth;
//             setItemsToLoad(screenWidth <= 768 ? 3 : 4);
//             setIsSmallScreen(screenWidth <= 450);
//         };

//         updateItemsToLoad();
//         window.addEventListener('resize', updateItemsToLoad);

//         return () => window.removeEventListener('resize', updateItemsToLoad);
//     }, []);

//     useEffect(() => {
//         startAutoSlide();

//         return () => {
//             stopAutoSlide();
//         };
//     }, [itemsToLoad, isSmallScreen]);

//     const handleTouchStart = () => {
//         touchScrolling.current = true;
//         stopAutoSlide(); // Stop auto-slide when touch scroll starts
//     };

//     const handleTouchEnd = () => {
//         touchScrolling.current = false;
//         startAutoSlide(); // Restart auto-slide after a delay when touch ends
//     };

//     const slideLeft = () => {
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToLoad, 0));
//     };

//     const slideRight = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex >= allData.length - itemsToLoad ? 0 : prevIndex + itemsToLoad
//         );
//     };

//     return (
//         <div
//             className={s.mainContainer}
//             onMouseEnter={isSmallScreen ? null : stopAutoSlide}
//             onMouseLeave={isSmallScreen ? null : startAutoSlide}
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//         >
//             <div className={s.headContainer}>
//                 <div className={s.headTop}></div>
//                 <p className={s.headText}>TOP CHOICES</p>
//                 <div className={s.headBottom}></div>
//             </div>
//             <div className={s.subContainer}>
//                 {!isSmallScreen && (
//                     <button className={s.navButton} onClick={slideLeft}>
//                         <ArrowBackIosIcon />
//                     </button>
//                 )}
//                 <div className={s.carousel}>
//                     <div
//                         className={s.carouselTrack}
//                         style={{
//                             transform: `translateX(-${currentIndex * (100 / itemsToLoad)}%)`,
//                         }}
//                     >
//                         {allData.map((item) => (
//                             <div key={item.id} className={s.card}>
//                                 <img src={item.image} alt={item.name} className={s.image} />
//                                 <p className={s.name}>{item.name}</p>
//                                 <p className={s.category}>{item.category}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {!isSmallScreen && (
//                     <button className={s.navButton} onClick={slideRight}>
//                         <ArrowForwardIosIcon />
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default TopChoices;


import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';  // Import Link
import s from './TopChoices.module.css';

const TopChoices = () => {
    const allData = [
        { id: 1, name: 'Mr Sandwich', category: 'Food Beverage', image: '/img/MrSandwich.jpg' },
        { id: 2, name: 'Lassi Story', category: 'Food Beverage', image: '/img/LassiStory.jpeg' },
        { id: 3, name: 'Rameshwaram Cafe', category: 'Food Beverage', image: '/img/RameshwaramCafe.png' },
        { id: 4, name: 'SS Combo Kitchen', category: 'Food Beverage', image: '/img/SScombokitchenLogo.jpg' },
        { id: 5, name: 'Urban Desi Chaat', category: 'Food Beverage', image: '/img/UrbanDesichaat.jpg' },
        { id: 6, name: 'Nawabi Kudkkad', category: 'Food Beverage', image: '/img/Nawabikukkadlogo.jpg' },
        { id: 1, name: 'Mr Sandwich', category: 'Food Beverage', image: '/img/MrSandwich.jpg' },
        { id: 2, name: 'Lassi Story', category: 'Food Beverage', image: '/img/LassiStory.jpeg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToLoad, setItemsToLoad] = useState(3);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);
    const autoSlideInterval = useRef(null);
    const touchScrolling = useRef(false); // To track if the user is touch-scrolling

    const startAutoSlide = () => {
        if (!isSmallScreen) {
            autoSlideInterval.current = setInterval(() => {
                if (!touchScrolling.current) {
                    setCurrentIndex((prevIndex) => {
                        if (prevIndex >= allData.length - itemsToLoad) {
                            return 0;
                        }
                        return prevIndex + itemsToLoad;
                    });
                }
            }, 4000);
        }
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval.current) {
            clearInterval(autoSlideInterval.current);
        }
    };

    useEffect(() => {
        const updateItemsToLoad = () => {
            const screenWidth = window.innerWidth;
            setItemsToLoad(screenWidth <= 768 ? 3 : 4);
            setIsSmallScreen(screenWidth <= 450);
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
    }, [itemsToLoad, isSmallScreen]);

    const handleTouchStart = () => {
        touchScrolling.current = true;
        stopAutoSlide(); // Stop auto-slide when touch scroll starts
    };

    const handleTouchEnd = () => {
        touchScrolling.current = false;
        startAutoSlide(); // Restart auto-slide after a delay when touch ends
    };

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
            onMouseEnter={isSmallScreen ? null : stopAutoSlide}
            onMouseLeave={isSmallScreen ? null : startAutoSlide}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className={s.headContainer}>
                <div className={s.headTop}></div>
                <p className={s.headText}>TOP CHOICES</p>
                <div className={s.headBottom}></div>
            </div>
            <div className={s.subContainer}>
                {!isSmallScreen && (
                    <button className={s.navButton} onClick={slideLeft}>
                        <ArrowBackIosIcon />
                    </button>
                )}
                <div className={s.carousel}>
                    <div
                        className={s.carouselTrack}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToLoad)}%)`,
                        }}
                    >
                        {allData.map((item) => (
                            <Link
                                key={item.id}
                                to={`/franchise/${item.id}`}  // Use the id in the route
                                className={s.card}
                            >
                                <img src={item.image} alt={item.name} className={s.image} />
                                <p className={s.name}>{item.name}</p>
                                <p className={s.category}>{item.category}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                {!isSmallScreen && (
                    <button className={s.navButton} onClick={slideRight}>
                        <ArrowForwardIosIcon />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TopChoices;
