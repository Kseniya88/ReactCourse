import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "./components/Routes";
import { store, persistor } from "./components/Store";
import { ThemeContext } from "./components/ThemeContext";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value="light">
            <Routes />
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
