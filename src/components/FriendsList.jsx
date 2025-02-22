import Friend from "./Friend";
import PropTypes from "prop-types";

function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          selectedFriend={selectedFriend}
          friend={friend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelection: PropTypes.func,
  selectedFriend: PropTypes.object,
};

export default FriendsList;
