import React from "react";
import "./Home.css";
import { Login } from "./Login";
import { Register } from "./Register";
import axios from "axios";
import { Route } from "react-router-dom";

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showRegister: false
    };
  }
  async tryRegister(form) {
    // Send to Backend!!!
    console.log(form);
    let promise = axios.post("http://localhost:8080/user", {
      userName: form.userName,
      completeName: form.completeName,
      email: form.email,
      password: form.completeName
    });
  }
  gotoRegister() {
    this.setState({ showRegister: true });
  }
  gotoLogin() {
    this.setState({ showRegister: false });
  }
  renderLogin() {
    return (
      <Login
        onLogin={form => this.tryLogin(form)}
        onRegister={() => this.gotoRegister()}
      />
    );
  }
  renderRegister() {
    return <Register onRegister={form => this.tryRegister(form)} />;
  }
  render() {
    return (
      <div className="home-page">
        <Route path="/login">{this.renderLogin()}</Route>
        <Route path="/register">{this}</Route>
      </div>
    );
  }
}
