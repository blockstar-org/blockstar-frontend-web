import styled, { css, keyframes } from 'styled-components'
import { colors, screenSizesPx } from '../../styles/theme'
import { slideIn } from './animations'

export const ModalContainer = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => (props?.isNotCenter ? '' : 'center')};
  align-items: ${(props) => (props?.isNotCenter ? '' : 'center')};
  background: ${colors.transparent};
  backdrop-filter: blur(10px); // You need to specify an effect, like 'blur'
  -webkit-backdrop-filter: blur(10px); // Include this for better browser support
  z-index: 9999;
`

export const ModalContent = styled.div<{
  nopadding?: string
  width?: string
  right?: string
  $animate?: any
}>`
  position: absolute;
  min-width: ${({ width }) => (width ? width : '450px')};
  right: ${({ right }) => right || ''};
  background: ${colors.primary};
  padding: ${({ nopadding }) => (nopadding == 'true' ? '0px' : '40px 35px 40px 35px')};
  box-shadow: 0px 98px 66px 0px rgba(19, 18, 66, 0.02),
    1px 4px 104px 0px rgba(20, 20, 43, 0.04),
    0px 54px 54px 0px rgba(74, 58, 255, 0.02);
  border-radius: 8px;
  animation: ${({ $animate }) =>
    $animate
      ? css`
          ${slideIn} 0.3s forwards
        `
      : ''};
  min-width: 785px;
  max-width: 835px;
  border: 1px solid ${colors.gray};

  @media (max-width: ${screenSizesPx.tablet}) {
    /* padding: ${({ nopadding }) => (nopadding == 'true' ? '0px' : '16px')}; */
    min-width: unset;
    width: 90vw;
  }
`
