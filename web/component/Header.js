import style from "../style/header.module.css";
export default function Header(props) {
  return (
    <div className={style.header_container}>
      <div className={style.header}>
        <h1 className={style.headOne}>Matt</h1>
        <h1 className={style.headTwo}>Atterholt</h1>

        <span className={style.bg_pattern}></span>
        <span className={style.bg_pattern}></span>
        <span className={style.bg_pattern}></span>
        <span className={style.bg_pattern}></span>

        <div className={style.bg_orange}></div>
        <div className={style.bg_orange}></div>
        <div className={style.bg_orange}></div>
        <div className={style.bg_orange}></div>
      </div>
    </div>
  );
}
