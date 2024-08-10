import clsx from 'clsx';
import css from './FriendListItem.module.css';
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const containerClsx = clsx(css.isActive, isOnline ? css.online : css.offline);
  return (
    <div className={css.userThumb}>
      <span className={containerClsx}></span>
      <img src={avatar} alt={name} width="150px" />
      <p className={css.userName}>{name}</p>
    </div>
  );
}
