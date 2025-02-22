import PropTypes from "prop-types";
import Button from "./Button";

import { useState } from "react";

function FormAddFriend({ add }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imageURL) return;

    const id = crypto.randomUUID;

    const newFriend = {
      id,
      name,
      imageURL: `${imageURL}?=${id}`,
      balance: 0,
    };

    add(newFriend);

    setName("");
    setImageURL("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯‍♀️ Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌆 Image URL</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

FormAddFriend.propTypes = {
  add: PropTypes.func,
};

export default FormAddFriend;
