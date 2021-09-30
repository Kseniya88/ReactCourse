import { useState } from "react";

const Home = ({ onLogin, onSignUp }) => {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin("");
    setPass("");

    if (!!onLogin) {
      onLogin(login, pass);
    } else {
      onSignUp(login, pass);
    }
  };

  return (
    <>
      <h1>HOME</h1>
      <h3>{!!onLogin ? "Login" : "Signup"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={login} onChange={handleLoginChange}></input>
        <input type="password" value={pass} onChange={handlePassChange}></input>
        <input type="submit" />
      </form>
    </>
  );
};

export default Home;
