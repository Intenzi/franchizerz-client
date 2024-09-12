import { useEffect, useState, useRef } from 'react';
import s from './TopCategories.module.css';

const categories = [
    { name: "Education", img: "./img/Education (1).png", url: "/category1" },
    { name: "Food and Beverage", img: "./img/Food & Beverage (1).png", url: "/category2" },
    { name: "Health Care", img: "./img/Healthcare (1) (1).png", url: "/category3" },
    { name: "Services and Retail", img: "./img/Service and retail (2).png", url: "/category1" },
    { name: "Tour and Leisure", img: "./img/Tour & Leisure.png", url: "/category2" },
    { name: "Open to Any", img: "./img/Open to any (1).png", url: "/category3" },
];

const TopCategories = () => {
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let scrollInterval;

        if (!isHovered) {
            scrollInterval = setInterval(() => {
                if (carousel) {
                    carousel.scrollLeft += 1.5;
                    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                        carousel.scrollLeft = 0;
                    }
                }
            }, 25); 
        }

        return () => clearInterval(scrollInterval);
    }, [isHovered]);

    return (
        <div className={s.mainContainer}>
            <div className={s.headContainer}>
                <div className={s.headTop}></div>
                <p className={s.headText}>TOP CATEGORIES</p>
                <div className={s.headBottom}></div>
            </div>

            <div className={s.contentContainer}>
                <div className={s.top}></div>

                <div
                    className={s.imagesContainer}
                    ref={carouselRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {categories.concat(categories).map((category, index) => (
                        <div 
                            key={index} 
                            className={s.imageWrapper} 
                            onClick={() => window.location.href = category.url}
                        >
                            <img src={category.img} alt={category.name} className={s.categoryImage} />
                            <div className={s.categoryName}>{category.name}</div>
                        </div>
                    ))}
                </div>
                <div className={s.bottom}></div>
            </div>
        </div>
    );
};

export default TopCategories;
