import { keyframes } from 'styled-components'

export const slideUp = keyframes`
  from {
    transform: translateY(100%); // Start off-screen to the right
    opacity: 0; // Start with zero opacity
  }
  to {
    transform: translateY(0); // Slide to its natural position
    opacity: 1; // Full opacity
  }
`

export const slideDown = keyframes`
  from {
    transform: translateY(-100%); // Start off-screen to the right
    opacity: 0; // Start with zero opacity
  }
  to {
    transform: translateY(0); // Slide to its natural position
    opacity: 1; // Full opacity
  }
`

export const slideOut = keyframes`
  from {
    transform: translateX(0); // Start from its natural position
    opacity: 1; // Full opacity
  }
  to {
    transform: translateX(100%); // Slide off-screen to the right
    opacity: 0; // End with zero opacity
  }
`

export const slideIn = keyframes`
  from {
    transform: translateX(100%); // Start off-screen to the right
    opacity: 0; // Start with zero opacity
  }
  to {
    transform: translateX(0); // Slide to its natural position
    opacity: 1; // Full opacity
  }
`
