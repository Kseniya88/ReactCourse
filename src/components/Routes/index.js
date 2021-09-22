import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Chats from "../Chats";
import Home from "../Home";
import Profile from "../Profile";
import "./../../App.scss";

export const Routes = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/">
            <Button variant="primary">HOME</Button>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Button>PROFILE</Button>
          </LinkContainer>
          <LinkContainer to="/chats">
            <Button>CHATS</Button>
          </LinkContainer>
        </ButtonToolbar>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chats/:chatId?" component={Chats}>
          <Chats />
        </Route>
        <Route path="/profile/:profile?">
          <Profile />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
