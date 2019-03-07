import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  login = ev => {
    ev.preventDefault();

    this.props.login(this.state).then(() => {
      this.props.history.push("/friends-list");
    });
  };
  render() {
    return (
      <form
        onSubmit={this.login}
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
          name="username"
          margin="normal"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <TextField
          id="standard-with-placeholder"
          label="password"
          placeholder="password"
          margin="normal"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    );
  }
}
export default connect(
  null,
  { login }
)(Login);
