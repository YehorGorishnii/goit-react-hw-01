import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem(
    {item : {avatar, name, isOnline}}
    ) {
  return (
    <div className={css.conteiner}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}



  