import { createGlobalStyle } from "styled-components";
/*globalny css jakbym chciala*/
export const GlobalStyles = createGlobalStyle`

@font-face
{
  font-family: "Cute big font";
  src: url("fonts/chatkids-webfont.woff");
}

@font-face {
  font-family: "Big font";
  src: url("fonts/Christmas Okinawa.otf");
}


   body
   { 
    background-color: #fcf8f5;
    overflow-y: auto;    /* Enables vertical scrolling */
        overflow-x: hidden;  /* Disables horizontal scrolling */
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        box-sizing: border-box;
   }

`;
