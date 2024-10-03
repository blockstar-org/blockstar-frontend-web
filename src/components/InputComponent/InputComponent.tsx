import styled from "styled-components";
import { EmailIcon, OtpIcon, PasswordIcon } from "../../assets/svgs/svg";
import { FlexRow, SVGWrapper } from "../../styles/sharedStyles";
import { colors, fonts } from "../../styles/theme";
import Button from "../button/Button";

export const InputComponent = ({ field, getOtp, form, ...props }) => {

  const renderIcon = (icon) => {
    switch (icon) {
      case "email":
        return <EmailIcon />;
      case "password":
        return <PasswordIcon />;
      case "otp":
        return <OtpIcon />;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // setting for validation on change
    if (value) form.setFieldTouched(field.name, true);
    form.setFieldValue(field.name, value);
  };

  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <CustomInput>
      <SVGWrapper>{renderIcon(props.type)}</SVGWrapper>
      <Input
        {...field}
        {...props}
        value={field.value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {props.otp && <OtpDiv onClick={getOtp}>Get OTP</OtpDiv>}
    </CustomInput>
  );
};

const OtpDiv = styled.div`
  display: inline-flex;
  height: 29px;
  padding: 0px 15.476px 0px 17px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${colors.secondary};
  font-family: ${fonts.SansRegular};
  color: ${colors.white};
  cursor: pointer;
  /* Shadow Small */
  box-shadow: 0px 1px 2px 0px rgba(46, 47, 54, 0.08);
`;

const CustomInput = styled.div`
  display: flex;
  gap: 10px;
  min-width: 495px;
  height: 40px;
  padding: 7.6px 13px 8.4px 13px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${colors.gray};
  background: ${colors.darkpurple};
`;

const Input = styled.input`
  all: unset;
  background: transparent;
  width: 100%;
  font-family: ${fonts.SansRegular};
  color: ${colors.white};
`;
