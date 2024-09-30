import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../integration/redux/hooks";
import { increment } from "../../integration/redux/slice/counterslice";
export default function ErrorPage() {
    const error = useRouteError();
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (_jsxs("div", { id: "error-page", children: [_jsx("h1", { children: "Oops!" }), _jsx("p", { children: "Sorry, an unexpected error has occurred." }), _jsx("p", { children: count }), _jsx("button", { onClick: () => dispatch(increment()), children: "+" }), _jsx("p", { children: _jsx("i", { children: error.statusText || error.message }) })] }));
}
