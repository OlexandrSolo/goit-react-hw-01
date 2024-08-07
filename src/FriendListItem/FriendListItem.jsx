export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
      {/* {isOnline ? (
        <p style={(color = 'green')}>{isOnline}</p>
      ) : (
        <p style={(color = 'red')}>{isOnline}</p>
      )} */}
    </div>
  );
}
