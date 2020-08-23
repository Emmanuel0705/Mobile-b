import React, { Fragment } from "react";

import Home from "./homepage.component";
import Login from "../login/index";
import { connect } from "react-redux";

const Main = ({ user }) => {
  console.log("userrrr", user);
  return <Fragment>{user.loggedIn ? <Home /> : <Login />}</Fragment>;
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Main);
