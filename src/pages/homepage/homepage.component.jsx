import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";

const HomePage = ({ logout }) => {
  return (
    <div id="appCapsule">
      <div
        class="section wallet-card-section pt-4"
        style={{ paddingTop: "40px" }}
      >
        <div class="wallet-card">
          <div class="balance">
            <div class="left">
              <span class="title">Total Balance</span>
              <h1 class="total">$ 250,000.00</h1>
            </div>
            <div class="right">
              <span class="title">Logout</span>
              <h1
                style={{ cursor: "pointer" }}
                class="total"
                onClick={() => logout()}
              >
                <ion-icon name="log-out"></ion-icon>
              </h1>
            </div>
          </div>

          <div class="wallet-footer">
            <div class="item">
              <a
                href="#!"
                data-toggle="modal"
                data-target="#withdrawActionSheet"
              >
                <div class="icon-wrapper">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <strong>Account Details</strong>
              </a>
            </div>
            <div class="item">
              <a href="#!" data-toggle="modal" data-target="#sendActionSheet">
                <div class="icon-wrapper bg-success">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <strong>Transfer Fund</strong>
              </a>
            </div>
            <div class="item">
              <a href="#!">
                <div class="icon-wrapper">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <strong>Cards</strong>
              </a>
            </div>
            <div class="item">
              <a
                href="#!"
                data-toggle="modal"
                data-target="#exchangeActionSheet"
              >
                <div class="icon-wrapper bg-success">
                  <ion-icon name="swap-vertical"></ion-icon>
                </div>
                <strong>Exchange</strong>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade action-sheet"
        id="withdrawActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Account Details</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="account2d">
                        Account Id
                      </label>
                      <p>1738929447</p>
                    </div>
                    <div class="input-wrapper">
                      <label class="label" for="text11d">
                        Account Name
                      </label>
                      <p>Bettymclennan</p>
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                    <div class="input-wrapper">
                      <label class="label" for="text11d">
                        Attached Email
                      </label>
                      <p>Betty7238@gmail.com</p>
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade action-sheet"
        id="sendActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Transfer Fund</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="account2">
                        From
                      </label>
                      <select class="form-control custom-select" id="account2">
                        <option value="0">Savings (*** 5019)</option>
                        <option value="1">Investment (*** 6212)</option>
                        <option value="2">Mortgage (*** 5021)</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="text11">
                        To
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="text11"
                        placeholder="Enter bank ID"
                      />
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="input14">
                          $
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-dismiss="modal"
                    >
                      Transfer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade action-sheet"
        id="exchangeActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Exchange</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group basic">
                        <div class="input-wrapper">
                          <label class="label" for="currency1">
                            From
                          </label>
                          <select
                            class="form-control custom-select"
                            id="currency1"
                          >
                            <option value="1">EUR</option>
                            <option value="2">USD</option>
                            <option value="3">AUD</option>
                            <option value="4">CAD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group basic">
                        <div class="input-wrapper">
                          <label class="label" for="currency2">
                            To
                          </label>
                          <select
                            class="form-control custom-select"
                            id="currency2"
                          >
                            <option value="1">USD</option>
                            <option value="1">EUR</option>
                            <option value="2">AUD</option>
                            <option value="3">CAD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="input1">
                          $
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        value="100"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-dismiss="modal"
                    >
                      Deposit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="row mt-2">
          <div class="col-12 mb-2">
            <div class="stat-box">
              <div class="title">
                <b>Full Name</b>
              </div>
              <div class="value ">Betty Mclennan</div>
            </div>
          </div>
          <div class="col-12 mb-2">
            <div class="stat-box">
              <div class="title">Email</div>
              <div class="value">Betty7238@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapdisToProps = (dis) => ({
  logout: () => dis(logout()),
});
export default connect(mapStateToProps, mapdisToProps)(withRouter(HomePage));
