import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { GET_FRIENDS, GET_FRIENDS_SUCCESS } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="container">
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
              // onClick={ev => props.deleteFriend(ev, props.id)}
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
    GET_FRIENDS,

    GET_FRIENDS_SUCCESS,

    getFriends
  }
)(FriendsList);
