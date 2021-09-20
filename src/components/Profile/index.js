import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName, changeName } from "../Store/Reducer/actions";
import Button from "react-bootstrap/Button";

const Profile = () => {
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
    <>
      <h1>Your Profile</h1>
      <form className="was-validated">
        <div className="custom-control custom-checkbox mb-3">
          <input
            onClick={handleClick}
            type="checkbox"
            className="custom-control-input"
            id="customControlValidation1"
            required
          ></input>
          <label
            className="custom-control-label"
            htmlFor="customControlValidation1"
          >
            Check this custom checkbox
          </label>
          {showName && <div>Show name is true</div>}
        </div>
      </form>
      <form onSubmit={handleSubmit}>
        <input text="text" value={value} onChange={handleChange}></input>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
        {name && <div>{name}</div>}
      </form>
    </>
  );
};

export default Profile;
