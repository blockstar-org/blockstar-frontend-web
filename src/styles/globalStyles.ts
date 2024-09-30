import { createGlobalStyle } from "styled-components";
import SansLight from '../assets/DM_Sans/static/DMSans_18pt-Light.ttf'
import SansRegular from '../assets/DM_Sans/static/DMSans_18pt-Regular.ttf'
import SansSemiBold from '../assets/DM_Sans/static/DMSans_18pt-SemiBold.ttf'
import SansBold from '../assets/DM_Sans/static/DMSans_18pt-Bold.ttf'

import { colors, fonts } from "./theme";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-font-color: #2a2a30;
    --primary: #016FF0;
    --secondary: #F7F9FC;
    --primary-font-color: #2A2A30;
    --textSecondary: #717171;
    --background: #FDFEFF;
    --stroke: #E9EDF1;
    --button: "#A9AAC2";
    --icons-btn: "#A9AAC2";
    --gradient: 'linear-gradient(67deg, rgba(0, 199, 255, 0.06) 0%, rgba(0, 76, 233, 0.06) 100%)';
    --white: #fff;
    --black: #000;
    
  }

  @font-face {
    font-family: ${fonts.SansLight}; //300
    src: url(${SansLight}) format('truetype');
    font-display: block;
  }
 
  @font-face {
    font-family:${fonts.SansRegular};//400
    src: url(${SansRegular}) format('truetype');
    font-display: block;
  }

  @font-face {
    font-family: ${fonts.SansSemiBold}; //600
    src: url(${SansSemiBold}) format('truetype');
    font-display: block;
  }

  @font-face {
    font-family: ${fonts.SansBold}; //800
    src: url(${SansBold}) format('truetype');
    font-display: block;
  } 
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html,body {
    /* height: 100%; */
    /* font-family: 'Lato-Regular'; */
    background: ${colors.primary};
    font-synthesis: none;
    overflow: auto;
  }
 
`;
