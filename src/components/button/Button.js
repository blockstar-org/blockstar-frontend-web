import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';
import SmallLoader from '../loaders/SmallLoader';
const Button = (props) => {
    const { text, onClick, backgroundColor, textColor, disabled, secondary, style, icon, type = 'button', padding, loading, stopPropogation, } = props;
    const handleClick = (e) => {
        if (onClick)
            onClick();
        if (stopPropogation) {
            e.stopPropagation();
        }
    };
    return (_jsxs(ButtonContainer, { onClick: handleClick, textColor: textColor, backgroundColor: backgroundColor, disabled: disabled || loading, secondary: secondary?.toString(), style: style || {}, type: type, padding: padding, loading: loading?.toString(), children: [_jsx("p", { children: text }), icon, loading && _jsx(SmallLoader, { color: '#fff' })] }));
};
export default Button;
const ButtonContainer = styled.button `
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 7px;
  background: ${({ secondary }) => (secondary == 'true' ? colors.primary : colors.secondary)};
  border: 1px solid
    ${({ secondary }) => (secondary == 'true' ? '#E9F1FF' : 'transparent')};
  display: flex;
  height: 44px;
  padding: ${({ padding }) => padding || '14px 30px'};
  gap: 7px;
  white-space: nowrap;
  position: relative;

  p {
    color: ${({ secondary }) => (secondary == 'true' ? '#000' : '#FFF')};
    text-align: right;
    font-family: ${fonts.SansRegular};
    font-size: 16px;
    font-style: normal;
    line-height: 140%; /* 22.4px */
    text-transform: capitalize;
  }

  /* svg {
    path {
      stroke: #046ecb;
    }
  } */

  /* &:hover {
    background: ${({ secondary }) => secondary == 'true'
    ? '#fff'
    : colors.primary};
    border: 1px solid
      ${({ secondary }) => (secondary == 'true' ? '#E5E7EB' : 'transparent')};
  } */

  &:disabled {
    opacity: ${({ loading }) => (loading == 'true' ? '1' : '0.7')};
    cursor: not-allowed;
  }
`;
