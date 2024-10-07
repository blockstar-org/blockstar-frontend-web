import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  overflow: auto;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`;

export const CreateCard = styled.div`
  display: flex;
  width: 100%;
  height: 91px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${colors.gradientPink};
`;

export const VideoProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 26px 12px 26px;
  border-radius: 20px;
  border: var(--Stroke_br_lt, 0.8px) solid ${colors.gray};
  background: ${colors.gradientGrey};
`;

export const VideoCreatedDetails = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 36px 35px 36px 35px;
  border-radius: var(--border-radius-2, 20px);
  border: var(--Stroke_br_lt, 0.8px) solid ${colors.gray};
  background: ${colors.gradientGrey};
`;

export const GridTab = styled.div<{ gap? }>`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: ${({ gap }) => (gap ? gap : "20px")};
`;

export const CreationVideo = styled.div<{height?, width?}>`
  display: flex;
  width: ${({width})=> width ? width : '359px'};
  height: ${({height})=> height ? height : '267px'};
  padding: 11px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1.6px solid rgba(255, 255, 255, 0.14);
`;

export const VericalLine = styled.div<{ color }>`
  position: absolute;
  left: -3px;
  top: calc(50% - 23px);
  width: 7px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ color }) => color};
`;

export const DetailTag = styled.div`
  position: absolute;
  top: -18px;
  left: 0;
  display: inline-flex;
  padding: 4px 13px 7px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--No_Stroke_br, 0px) var(--No_Stroke_br, 0px) 10px 10px;
  background: ${colors.primary};
  font-family: ${fonts.SansRegular};
  color: ${colors.white};
  font-size: 19px;
`;
