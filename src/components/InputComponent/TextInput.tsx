import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

interface TextInputInterface  {
  placeholder: string,
  onChange: any,
  value?: string

}
export const TextInput = ({placeholder, onChange, value}: TextInputInterface) => {
  return (
    <>
      <Wrapper>
        <Input  placeholder={placeholder} rows={4} cols={3} onChange={onChange} value={value|| ''}/>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 200px;
  gap: 10px;
  width: 100%;
  height: 36px;
  padding: 5.6px 13px 6.4px 13px;
  align-items: center;
  flex-shrink: 0;
  border-radius: var(--border-radius, 8px);
  border: var(--Stroke_br_normal, 1px) solid ${colors.gray};
  background: ${colors.darkpurple};
`;

const Input = styled.textarea`
  all: unset;
  background: transparent;
  height: 100%;
  width: 100%;
  font-family: ${fonts.SansRegular};
  color: ${colors.white};
  text-align: left; // Aligns text horizontally to the left
  line-height: 1.5; // Controls vertical spacing
  padding: 0; // Remove padding to ensure proper alignment
  box-sizing: border-box;
  overflow-wrap: break-word; // Ensures words wrap when they are too long
  word-wrap: break-word; // Supports word wrapping for older browsers
  white-space: pre-wrap; // Allows wrapping while preserving new lines
`;
