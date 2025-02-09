import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-image: url("images/upperfooter.png");
  background-position: center;
  width: 100vw; /* Fit the viewport width */
  height: 30vh;
  left: -1vw;
  position: fixed; /* Fix it at the bottom */
  bottom: -15vh; /* Position it at the bottom of the viewport */
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center align items horizontally */
  font-family: "Cute big font"; /* Apply font to the text */
  color: #c6302c; /* Text color */
  background-color: #ffcdde; /* Optional background color for better contrast */
  text-shadow: 0.1vw 0.1vw 0 #f4879c;
  font-size: 2rem; /* Text size */
  border-radius: 20px; /* Add rounded corners for the container */
  text-align: center; /* Center the text inside the container */
`;
