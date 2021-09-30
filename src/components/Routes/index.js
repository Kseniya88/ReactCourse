import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Chats from "../Chats";
import Home from "../Home";
import Profile from "../Profile/profileCont";
import { News } from "../News";
import "./../../App.scss";
import { PrivateRoute } from "../PrivateRoute";
import { useState, useEffect } from "react";
import { PublicRoute } from "../PublicRoute";
import { login, auth, signUp } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "@firebase/auth";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (email, pass) => {
    try {
      await login(email, pass);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSignUp = async (email, pass) => {
    try {
      await signUp(email, pass);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  };

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
          <LinkContainer to="/news">
            <Button>NEWS</Button>
          </LinkContainer>
        </ButtonToolbar>
      </nav>

      <Switch>
        <PublicRoute path="/login" exact authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" exact authed={authed}>
          <Home onSignUp={handleSignUp} />
        </PublicRoute>
        <PrivateRoute path="/chats/:chatId?" component={Chats} authed={authed}>
          <Chats />
        </PrivateRoute>
        <PrivateRoute path="/profile/:profile?" exact authed={authed}>
          <Profile onLogout={handleLogout} />
        </PrivateRoute>
        <Route path="/news" component={News}></Route>
        <Route>
          <h1>Page Not Found</h1>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
