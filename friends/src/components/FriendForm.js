import React from "react";

export default function FriendForm(props) {
  return (
    <form className="friend-form" onSubmit={props.addFriend}>
      <input
        className="friend-form-input"
        type="text"
        placeholder="Name"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
      <input
        className="friend-form-input"
        type="number"
        placeholder="Age"
        name="age"
        value={props.age}
        onChange={props.handleChange}
      />
      <input
        className="friend-form-input"
        type="text"
        placeholder="Email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
      />
      <input
        className="friend-form-input"
        type="text"
        placeholder="Image Url"
        name="imgUrl"
        value={props.imgUrl}
        onChange={props.handleChange}
      />

      <button style={{ background: "white" }}>Add</button>
      <button style={{ background: "white" }}>Update</button>
    </form>
  );
}
