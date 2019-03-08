import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getFriends, addFriend, deleteFriend } from "../actions";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
    imgUrl: ""
  };
  componentDidMount() {
    this.props.getFriends();
  }
  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  addFriend = ev => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      imgUrl: this.state.imgUrl
    };
    ev.preventDefault();
    this.props.addFriend(newFriend);
    this.setState({
      name: "",
      age: "",
      email: "",
      imgUrl: ""
    });
  };
  deleteFriend = (ev, id) => {
    ev.preventDefault();
    this.props.deleteFriend(id);
  };
  render() {
    return (
      <div className="container">
        <FriendForm
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          imgUrl={this.state.imgUrl}
          addFriend={this.addFriend}
          handleChange={this.handleChange}
        />
        {this.props.friends.map(friend => (
          <Card className="card">
            <CardActionArea>
              <img
                style={{ width: "100%", height: "150px" }}
                src={friend.imgUrl}
                alt={friend.imgUrl}
              />
              <CardContent style={{ background: "#e0e0e0" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {friend.name}, {friend.age}
                </Typography>
                <Typography component="p">{friend.email}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                onClick={ev => this.deleteFriend(ev, friend.id)}
                size="large"
                color="secondary"
              >
                Delete
              </Button>
              <Button
                // onClick={ev => props.updateForm(ev, props.id)}
                size="large"
                color="primary"
              >
                Update
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    friends: state.friends,
    getFriends: state.getFriends
  };
}

export default connect(
  mapStateToProps,
  {
    getFriends,
    addFriend,
    deleteFriend
  }
)(FriendsList);
