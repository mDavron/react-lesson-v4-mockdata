import React, { Component } from "react";
// import img1 from "./assets/images/user-1.jfif";
import { data } from "./data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="container">
        {data.map((user) => {
          return (
            <div key={user.id} className="card">
              <div className="card-img">
                <img src={user.avatarImg} alt="img" />
              </div>
              <div className="card-user-info">
                <h4>
                  <b>Name: </b>
                  {user.name}
                </h4>
                <p>
                  <b>Username: </b>
                  {user.username}
                </p>
                <p>
                  <b>Email: </b>
                  {user.email}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
