import styled from "styled-components";
import { SearchIcon } from "../../assets/svgs/svg";
import { SVGWrapper } from "../../styles/sharedStyles";
import { colors, fonts } from "../../styles/theme";

export const CustomInput = () => {
  return (
    <Wrapper>
      <SVGWrapper>
        <SearchIcon/>
      </SVGWrapper>
      <Input placeholder="Search"/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
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

const Input = styled.input`
  all: unset;
  background: transparent;
  width: 100%;
  font-family: ${fonts.SansRegular};
  color: ${colors.white};
`;
