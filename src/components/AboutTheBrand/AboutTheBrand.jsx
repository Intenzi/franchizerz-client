import s from './AboutTheBrand.module.css';


const AboutTheBrand=()=>{
    return (
        <div className={s.mainContainer}>
            <div className={s.headContainer}>
                <div className={s.headTop}></div>
                <p className={s.headText}>ABOUT THE BRAND</p>
                <div className={s.headBottom}></div>
            </div>
            <div className={s.content}>
                <div className={s.contentHeader}><p>Become a Starbucks Franchisee</p></div>
                <div className={s.contentInfo}><p>
                    Join one of the world’s most iconic coffee brands by becoming a Starbucks franchisee. With global brand recognition, ethical sourcing, and a commitment to sustainability, Starbucks offers a proven business model backed by comprehensive training and ongoing support.
                    As a franchise owner, you’ll benefit from a strong customer base, operational expertise, and the opportunity to create welcoming spaces for communities. If you’re passionate about great coffee and building a successful business, start your journey with Starbucks today!</p></div>
                </div>
        </div>
    );
}
export default AboutTheBrand;