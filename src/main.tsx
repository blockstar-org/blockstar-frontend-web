import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
import { Provider } from "react-redux";
import { store } from "./integration/redux/store";
import { GlobalStyles } from "./styles/globalStyles";
import toast, { Toaster } from "react-hot-toast";
import { colors, fonts } from "./styles/theme";

export const notify = (text, isError?) => {
  if (isError) return toast.error(text);
  return toast.success(text);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Toaster  toastOptions={{
    className: '',
    style: {
      color: colors.black,
      fontFamily: fonts.SansRegular
    },
  }}/>
      <App />
    </Provider>
  </StrictMode>
);
