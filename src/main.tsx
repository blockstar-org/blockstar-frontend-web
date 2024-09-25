import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
import { Provider } from "react-redux";
import { store } from "./integration/redux/store";
import { GlobalStyles } from "./styles/globalStyles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <App />
    </Provider>
  </StrictMode>
);
