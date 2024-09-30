import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
import { Provider } from "react-redux";
import { store } from "./integration/redux/store";
import { GlobalStyles } from "./styles/globalStyles";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsxs(Provider, { store: store, children: [_jsx(GlobalStyles, {}), _jsx(App, {})] }) }));
