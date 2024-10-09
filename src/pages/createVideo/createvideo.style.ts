import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 29px;
  gap: 45px;
  overflow: auto;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 420px auto;
  padding: 49px 22px 49px 22px;
  border-radius: var(--border-radius-2, 20px);
  border: var(--Stroke_br_lt, 0.8px) solid ${colors.gray};
  background: ${colors.gradientGrey};
  gap: 60px;
`;

export const SelectionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  max-height: 580px;
  overflow: auto;
  padding: 22px 23px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 27px;
  border-radius: var(--border-radius-2, 20px) var(--border-radius-2, 20px)
    var(--No_Stroke_br, 0px) var(--No_Stroke_br, 0px);
  background: ${colors.gradientGrey};
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
`;

export const Tag = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 50%;
  color: ${colors.white};
  text-align: center;
  font-family: ${fonts.SansRegular};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Type = styled.div<{ isSelected? }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: var(--border-radius, 8px);
  border: ${({ isSelected }) => isSelected && `1px solid ${colors.grayLight}`};
  background: ${colors.primary};
  color: ${({ isSelected }) => (isSelected ? colors.white : colors.grayLight)};
  text-align: center;
  /* Body 1 medium */
  font-family: ${fonts.SansRegular};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 15.6px */
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    border: var(--Stroke_br_normal, 1px) solid ${colors.grayLight};
    color: ${colors.white};
  }
`;

export const TypeWrapper = styled.div`
  width: 374px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 5px;
  overflow: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
`;

export const GridTab = styled.div<{ gap? }>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ gap }) => (gap ? gap : "20px")};
`;

export const CreationVideo = styled.div<{ height?; width? }>`
  position: relative;
  display: flex;
  width: ${({ width }) => (width ? width : "359px")};
  height: ${({ height }) => (height ? height : "267px")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
`;

export const SelectDefault = styled.div<{ isSelected? }>`
  position: absolute;
  top: 5px;
  left: 8px;
  display: flex;
  padding: 5px 7px;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: var(--border-radius, 8px);
  border: var(--Stroke_br_lt-2, 0.5px) solid
    ${({ isSelected }) => (isSelected ? colors.white : colors.gray)};
  background: ${({ isSelected }) =>
    isSelected ? colors.secondary : colors.primary};
  box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
  z-index: 999;
 
`;
export const SelectTag = styled.div<{ isSelected? }>`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 50%;
  border: var(--Stroke_br_lt-2, 0.5px) solid
    ${({ isSelected }) => (isSelected ? colors.white : colors.gray)};
  background: ${({ isSelected }) =>
    isSelected ? colors.secondary : colors.primary};
  box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
  z-index: 999;
  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -20px;
  left: 22px;
  display: flex;
  padding: 4px 15px 7px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--No_Stroke_br, 0px) var(--No_Stroke_br, 0px) 10px 10px;
  background: ${colors.primary};
  color: ${colors.white};

  /* H3 medium */
  font-family: ${fonts.SansRegular};
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 33.6px */
`;
