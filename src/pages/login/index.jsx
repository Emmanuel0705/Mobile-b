import React from "react";
import { useState } from "react";
import { login } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Login = ({ login }) => {
  const [state, setState] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const SubmitForm = () => {
    setLoader(true);

    if (
      state.username.toLowerCase() === "bettymclennan20" &&
      state.password === "ss83009422"
    ) {
      setTimeout(() => {
        setLoader(false);
        return login();
      }, 5000);
    }
    setTimeout(() => {
      setLoader(false);
      setError(true);
    }, 5000);
  };
  return (
    <div
      id="appCapsule"
      style={{
        height: "600px",
        backgroundSize: "cover",
        backgroundImage: `url('https://www.ozk.com/assets/images/SmallBiz_Hero.jpg')`,
      }}
    >
      <div class="section mb-5 p-2">
        <div class="card">
          <div class="card-body pb-1">
            <div class="section mt-2 text-center">
              <h1>Log in</h1>
              <h4>Fill the form to log in to your Ozarks account</h4>
            </div>

            <p style={{ color: "red" }}>{error && "Invalid login Details"} </p>
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="email1">
                  Username
                </label>
                <input
                  onChange={(e) =>
                    setState({ ...state, username: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  id="email1"
                  placeholder="Your Username"
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>

            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">
                  Password
                </label>
                <input
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                  type="password"
                  class="form-control"
                  id="password1"
                  placeholder="Your password"
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div class="transparent" style={{ marginTop: "20px" }}>
          <button
            onClick={() => SubmitForm()}
            class="btn btn-primary btn-block btn-lg"
          >
            {loader ? <Spinner /> : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};
const mapdisToProps = (dis) => ({
  login: () => dis(login()),
});

export default connect(null, mapdisToProps)(Login);
