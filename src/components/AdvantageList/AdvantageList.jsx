import { FaHeart, FaFilter } from "react-icons/fa";
import { IoPersonRemoveSharp, IoPersonAddSharp } from "react-icons/io5";

import css from "./AdvantageList.module.css";

export default function AdvantageList() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <h3 className={css.title}>User-Friendly Interface</h3>
        <FaHeart className={css.icon} size="30px" color="#ba88f8" />
      </li>
      <li className={css.item}>
        <h3 className={css.title}>
          Effortless <br /> Add and Remove
        </h3>
        <div className={css["icon-box"]}>
          <IoPersonAddSharp size="30px" color="#ba88f8" />
          <IoPersonRemoveSharp size="30px" color="#ba88f8" />
        </div>
      </li>
      <li className={css.item}>
        <h3 className={css.title}>Filtering through contacts</h3>
        <FaFilter className={css.icon} size="30px" color="#ba88f8" />
      </li>
    </ul>
  );
}
