import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const CircularSpinnerContainer = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || '100%'};
  width: auto;
`

const calculateBorder = (size: string) => {
  // Assuming the default size is 40px with a 4px border,
  // calculate the border size as a fraction of the height.
  const defaultSize = 40
  const defaultBorder = 4
  const newSize = parseInt(size)
  const newBorder = (newSize * defaultBorder) / defaultSize
  return isNaN(newBorder) ? defaultBorder : newBorder
}

const Spinner = styled.div<{ height?: string }>`
  border: ${({ height, color }) =>
    `${calculateBorder(height || '40px')}px solid ${color || '#e0e0e0'}`};
  border-radius: 50%;
  border-top: ${({ height }) =>
    `${calculateBorder(height || '40px')}px solid transparent`};
  width: ${({ height }) => height || '40px'};
  height: ${({ height }) => height || '40px'};
  animation: ${spinAnimation} 1s linear infinite;
`

interface Props {
  height?: string
  style?: React.CSSProperties
  color?: string
}

const CircularSpinner = (props: Props) => {
  const { height = '40px', style, color } = props

  return (
    <CircularSpinnerContainer height={height} style={style || {}}>
      <Spinner height={height} color={color} />
    </CircularSpinnerContainer>
  )
}

export default CircularSpinner
