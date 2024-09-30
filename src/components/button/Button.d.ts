/// <reference types="react" />
interface ButtonProps {
    text: string;
    onClick?: any;
    icon?: any;
    textColor?: string;
    backgroundColor?: string;
    disabled?: boolean;
    secondary?: boolean;
    style?: React.CSSProperties;
    type?: 'button' | 'submit' | 'reset';
    padding?: string;
    loading?: boolean;
    stopPropogation?: boolean;
}
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
