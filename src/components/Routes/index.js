import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Chats from "../Chats";
import Home from "../Home";
import Profile from "../Profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/chats">CHATS</Link>
      </div>
      <div>
        <Link to="/profile">PROFILE</Link>
      </div>
      <div>
        <Link to="/">HOME</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chats/:chatId?">
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
