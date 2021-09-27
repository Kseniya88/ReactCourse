import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const ProfileView = ({
  onClick,
  showName,
  onSubmit,
  value,
  onChange,
  name,
}) => (
  <>
    <h1>Your Profile</h1>
    <form className="was-validated">
      <div className="custom-control custom-checkbox mb-3">
        <input
          onClick={onClick}
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
    <form onSubmit={onSubmit}>
      <input text="text" value={value} onChange={onChange}></input>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
      {name && <div>{name}</div>}
    </form>
  </>
);

export default ProfileView;
