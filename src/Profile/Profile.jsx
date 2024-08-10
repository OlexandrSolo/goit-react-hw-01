import css from './Profile.module.css';
export default function Profile({
  props: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profileWrapper}>
      <div className={css.thumb}>
        <img
          className={css.userPhoto}
          src={avatar}
          alt="user avatar"
          width="150px"
        />
        <p>
          <b>{username}</b>
        </p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.informationList}>
        <li className={css.informationItem}>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.informationItem}>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li className={css.informationItem}>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
