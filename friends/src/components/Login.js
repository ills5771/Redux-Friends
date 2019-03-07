import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Login() {
  return (
    <form
      style={{
        margin: "20% 25%",
        width: "400px",
        height: "400px",
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        border: "1px solid lightgray"
      }}
    >
      <img
        style={{ width: "300px", height: "150px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW8QPtJLvt4eby6wb4J-5X6HGaIR6yBsHh2S3A3M2XzAAcz2J"
        alt="friends-logo"
      />
      <TextField
        id="standard-with-placeholder"
        label="username"
        placeholder="username"
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="password"
        placeholder="password"
        margin="normal"
      />
      <Button variant="contained">Login</Button>
    </form>
  );
}
