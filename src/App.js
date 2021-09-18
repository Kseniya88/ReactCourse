import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "./components/Routes";
import { showName, store } from "./components/Store";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value="light">
          <Routes />
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default App;
