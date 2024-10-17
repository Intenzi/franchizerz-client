import React from 'react';
import s from './FoodAndBeverage.module.css';

export const mrSandwichFeatures = [
    "Working with a well-established brand",
    "High profitability",
    "Affordable investment",
    "Marketing support",
    "Fast growing outlets",
    "Continue hand holding and support",
    "CRM Software",
    "Staff training and support.",
];

export const LassiStoryFeatures = [
    "Zero cost sales training",
    "Hassle-free licensing",
    "Support for operations",
    "Best recipe",
    "Gross margins 45 to 50%",
    "Guaranteed profitability",
    "Lifetime contract without renewal fees",
    "Consistent 6-12 months ROI ."
];

const foodItems = [
    { 
        name: "MrSandwich", 
        img: "./img/NewMrSandwich.png", 
        description: mrSandwichFeatures.join(", ") 
    },
    { 
        name: "LassiStory", 
        img: "./img/NewLassiStory.png", 
        description: LassiStoryFeatures.join(", ") 
    },
];

const FoodAndBeverage = () => {
    return (
        <div className={s.foodContainer}>
            <h1>Food and Beverage</h1>
            <div className={s.cardContainer}>
                {foodItems.map((item, index) => (
                    <div key={index} className={s.card}>
                        <img src={item.img} alt={item.name} className={s.cardImage} />
                        <div className={s.cardContent}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
// food 
export default FoodAndBeverage;
