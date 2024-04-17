import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.conteiner}>
      <div className={css.user}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userTag}>{location}</p>
      </div>

      <ul className={css.userList}>
        <li className={css.info}>
          <span className={css.text}>Followers</span>
          <span className={css.text}>{stats.followers}</span>
        </li>
        <li className={css.info}>
          <span className={css.text}>Views</span>
          <span className={css.text}>{stats.views}</span>
        </li>
        <li className={css.info}>
          <span className={css.text}>Likes</span>
          <span className={css.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
