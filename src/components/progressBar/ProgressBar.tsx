import styled from "styled-components";
import { colors } from "../../styles/theme";

export const ProgressBar = ({ width }) => {
  return (
    <OuterBar>
      <InnerBar width={width} />
    </OuterBar>
  );
};

const OuterBar = styled.div`
  display: flex;
  height: var(--border-radius, 8px);
  align-items: center;
  gap: var(--border-radius, 8px);
  align-self: stretch;
  border-radius: 64px;
  background: ${colors.grayLight};
  border-radius: 64px;
`;

const InnerBar = styled.div<{ width }>`
  width: ${({ width }) => width};
  align-self: stretch;
  border-radius: 64px;
  background: ${colors.darkblue};
`;
