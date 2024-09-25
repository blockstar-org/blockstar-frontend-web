import styled from 'styled-components'

const SmallLoader = ({
  className,
  color,
}: {
  className?: string
  color?: string
}) => {
  return <SmallLoaderCont className={className} color={color} />
}

export default SmallLoader

const SmallLoaderCont = styled.span<{ color?: string }>`
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-bottom-color: ${({ color }) => color || '#fff'};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin-top: 1px;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: absolute;
  right: 8px;

  &.large {
    position: static;
    width: 60px;
    height: 60px;
    border-width: 6px;
  }
`
