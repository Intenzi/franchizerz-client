import s from './AboutTheBrand.module.css';


const AboutTheBrand=({ brandName, description })=>{
    return (
        <div className={s.mainContainer}>
            <div className={s.headContainer}>
                <div className={s.headTop}></div>
                <p className={s.headText}>ABOUT THE BRAND</p>
                <div className={s.headBottom}></div>
            </div>
            <div className={s.content}>
                <div className={s.contentHeader}><p>Become a {brandName} Franchisee</p></div>
                <div className={s.contentInfo} dangerouslySetInnerHTML={{ __html: description }}> 

                </div>
                </div>
        </div>
    );
}
export default AboutTheBrand;