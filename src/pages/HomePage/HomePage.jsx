import AdvantageList from "../../components/AdvantageList/AdvantageList";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.home}>
      <div className={css.left}>
        <div className={css["title-box"]}>
          <h1 className={css.title}>
            Welcome to <span className={css.accent}>CallMate</span> <br />
          </h1>
          <h2 className={css.subtitle}>Your Perfect Contacts Book</h2>
        </div>
        <AdvantageList />
      </div>

      <img
        srcSet="/photo_361.webp 361w, /photo_722.webp 722w,  
             /photo_442.webp 442w, /photo_884.webp 844w,  
             /photo_602.webp 602w, /photo_1204.webp 1204w"
        sizes="(max-width: 855.9px) 361px,  
            (max-width: 1157.9px) 442px,  
            602px"
        src="/photo_361.webp"
        alt="woman with a phone"
        className={css.img}
        loading="lazy"
      />
    </div>
  );
}
