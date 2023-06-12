import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "./redux/UserActions";

function UsersContainer(props) {
  return (
    <>
      <h2>Number of Users {props.numOfUsers} </h2>
      <button onClick={props.deleteUser}>Click to Delete</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfUsers: state.numOfUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch(deleteUser),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
