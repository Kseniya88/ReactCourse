import TextField from "@material-ui/core/TextField";
import Button from "./../Button";
import IconLabelButtons from "../IconLabelButtons";
import { StylesProvider } from "@material-ui/core/styles";

export const FormView = ({ onSubmit, inputRef, value, onChange }) => (
  <>
    <StylesProvider injectFirst>
      <form className="App-header__Form" onSubmit={onSubmit}>
        <TextField
          label="Ваш текст"
          type="text"
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          autoFocus={true}
        />
        <Button>
          <IconLabelButtons />
        </Button>
      </form>
    </StylesProvider>
  </>
);
