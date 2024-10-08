import React from "react";
import styled, { keyframes } from "styled-components";

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Styled Shimmer Card
const ShimmerCardBox = styled.div<{ width?; height? }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "200px"};
  border-radius: var(--border-radius, 8px);
  background: var(--White, #fff);
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: ${shimmer} 1.5s infinite;
  }
`;

// Component Usage
const ShimmerCard = ({ width, height }) => {
  return <ShimmerCardBox width={width} height={height} />;
};

export default ShimmerCard;
