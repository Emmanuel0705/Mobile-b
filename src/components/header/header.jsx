import React from "react";
import { Link } from "react-router-dom";

export default function PrimarySearchAppBar() {
  return (
    <div class="appHeader bg-primary text-light">
      <div class="left">
        <Link to="/" class="headerButton">
          <div class="pageTitle">
            <img
              style={{ height: "300px", width: "250px" }}
              src="assets/img/logo2.png"
              alt="logo"
              class="logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
