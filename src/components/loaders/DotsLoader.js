import { jsx as _jsx } from "react/jsx-runtime";
import './dots.css';
const DotsLoader = (props) => {
    return (_jsx("div", { className: props.small ? 'loader_dots_small' : 'loader_dots' }));
};
export default DotsLoader;
