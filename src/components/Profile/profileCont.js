import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName, changeName } from "../Store/Reducer/actions";
import ProfileView from "./profileView";

const ProfileCont = () => {
  const [value, setValue] = useState("");
  const showName = useSelector((state) => state.profile.showName);
  const name = useSelector((state) => state.profile.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <ProfileView
      onClick={handleClick}
      showName={showName}
      onSubmit={handleSubmit}
      value={value}
      onChange={handleChange}
      name={name}
    />
  );
};

export default ProfileCont;
