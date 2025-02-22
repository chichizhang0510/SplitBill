import { useState } from "react";
import "@/styles/App.css";

import FriendsList from "@/components/FriendsList";
import FormAddFriend from "@/components/FormAddFriend";
import Button from "@/components/Button";
import FormSplitBill from "@/components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [SelectFriend, setSelectFriend] = useState(null);

  function handleClick() {
    setShowAddFriends((prev) => !prev);
  }

  function addAFriend(friend) {
    setFriends((prev) => [...prev, friend]);
  }

  function handleSelection(friend) {
    // 可选链操作符 (?.)，如果 prev 为 null，不会报错，而是返回 undefined。
    setSelectFriend((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriends(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === SelectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : { ...friend }
      )
    );

    setSelectFriend(null);
  }

  return (
    <div>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            selectedFriend={SelectFriend}
            onSelection={handleSelection}
          />

          {showAddFriends && <FormAddFriend add={addAFriend} />}
          <Button onClick={handleClick}>
            {!showAddFriends ? "Add a friend" : "Close"}
          </Button>
        </div>
        {SelectFriend && (
          <FormSplitBill
            selectedFriend={SelectFriend}
            splitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
