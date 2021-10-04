import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName, changeName } from "../Store/Reducer/actions";
import { ref, set, onValue } from "@firebase/database";

import ProfileView from "./profileView";
import { db } from "../../services/firebase";
import Message from "../Message";

export const ProfileCont = ({ onLogout }) => {
  const [value, setValue] = useState("");
  const [names, setNames] = useState();

  const showName = useSelector((state) => state.profile.showName);
  const name = useSelector((state) => state.profile.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowName);
  };

  const handleLogout = () => {
    onLogout();
  };

  useEffect(() => {
    const userDbRef = ref(db, "user");
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("_______", data);
      setNames(data?.username || "");
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
    set(ref(db, "user"), {
      username: value,
    });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <ProfileView
        onClick={handleClick}
        showName={showName}
        onSubmit={handleSubmit}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </>
  );
};

export default ProfileCont;

export const Text = ({ name }) => {
  return (
    <section>
      <h3>HELLO, {name}</h3>
    </section>
  );
};
