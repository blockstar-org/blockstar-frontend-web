import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  height: 100%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 26px 12px 26px;
  border-radius: 20px;
  border: var(--Stroke_br_lt, 0.8px) solid ${colors.gray};
  background: ${colors.gradientGrey};
`;
