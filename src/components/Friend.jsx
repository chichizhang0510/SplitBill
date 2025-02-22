import PropTypes from "prop-types";

import Button from "./Button";

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend === friend;
  return (
    <li key={friend.id} className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You own {friend.name} {friend.balance}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owns you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
  onSelection: PropTypes.func,
  selectedFriend: PropTypes.object,
};

export default Friend;
