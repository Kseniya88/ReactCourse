import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName } from "../Store/Reducer/actions";

const Profile = () => {
  const showName = useSelector((state) => state.showName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowName);
  };

  return (
    <>
      <h1>Your Profile</h1>
      <form class="was-validated">
        <div class="custom-control custom-checkbox mb-3">
          <input
            onClick={handleClick}
            type="checkbox"
            class="custom-control-input"
            id="customControlValidation1"
            required
          ></input>
          <label class="custom-control-label" for="customControlValidation1">
            Check this custom checkbox
          </label>
          {showName && <div>Show name is true</div>}
        </div>
      </form>
    </>
  );
};

export default Profile;
