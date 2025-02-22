import Button from "./Button";
import PropTypes from "prop-types";

import { useState } from "react";

function FormSplitBill({ selectedFriend, splitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill - paidByUser;

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    splitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input type="text" onChange={(e) => setBill(Number(e.target.value))} />

      <label>🧍🏻‍♂️ Your Expense</label>
      <input
        type="text"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? "Wong" : Number(e.target.value)
          )
        }
      />

      <label>👬 {selectedFriend.name}&apos;s expense</label>
      <input
        type="text"
        disabled
        value={bill !== 0 || paidByUser < bill ? paidByFriend : ""}
      />

      <label>☝️ Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object,
  splitBill: PropTypes.func,
};

export default FormSplitBill;
