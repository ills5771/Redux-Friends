import React from "react";

export default function FriendForm(props) {
  return (
    <form className="friend-form" onSubmit={handleSubmit}>
      <input
        className="friend-form-input"
        type="text"
        placeholder="Name"
        name="name"
        value={props.friend.name}
        onChange={props.onChange}
      />
      <input
        className="friend-form-input"
        type="number"
        placeholder="Age"
        name="age"
        value={props.friend.age}
        onChange={props.onChange}
      />
      <input
        className="friend-form-input"
        type="text"
        placeholder="Email"
        name="email"
        value={props.friend.email}
        onChange={props.onChange}
      />
      <input
        className="friend-form-input"
        type="text"
        placeholder="Image Url"
        name="imgUrl"
        value={props.friend.imgUrl}
        onChange={props.onChange}
      />

      <button style={{ background: "white" }}>Add</button>
      <button style={{ background: "white" }}>Add</button>
    </form>
  );
}
