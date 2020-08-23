import React, { Fragment } from "react";

import Home from "./homepage.component";
import Login from "../login/index";
import { connect } from "react-redux";
import Header from "../../components/header/header";

const Main = ({ user }) => {
  console.log("userrrr", user);
  return (
    <Fragment>
      {user.loggedIn ? (
        <Fragment>
          <Header />
          <Home />{" "}
        </Fragment>
      ) : (
        <Login />
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Main);
