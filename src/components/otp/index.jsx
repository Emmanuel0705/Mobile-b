import React, { Fragment } from "react";

import { SpinnerOverlay } from "../spinner/spinner.styles";
import { Card } from "@material-ui/core";
import { useState } from "react";
import Progress from "../Progress";

function OTP() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const Verify = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setError(true);
    }, 3000);
  };

  return (
    <SpinnerOverlay>
      {loader ? (
        <Progress />
      ) : (
        <Card style={{ padding: "50px" }}>
          <h3>Enter your OTP to continue</h3>
          <Fragment>
            <p style={{ color: "red" }}>{error && "invalid OTP"}</p>
            <input class="form-control" placeholder="Enter OTP" />
            <div class="transparent" style={{ marginTop: "20px" }}>
              <button
                onClick={() => Verify()}
                class="btn btn-primary btn-block btn-lg"
              >
                Verify OTP
              </button>
            </div>
          </Fragment>
        </Card>
      )}
    </SpinnerOverlay>
  );
}

export default function CircularStatic() {
  return <OTP />;
}
