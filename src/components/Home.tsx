import { CuteText, TextBox, TextContainer } from "../Styles/CuteTextStyle";
import { PageCenter } from "../Styles/CenteringPageStyle";
import { Shine } from "../Styles/Navbar";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { BlogInfo } from "../Styles/HomePageHover";

const Home = () => {
  const [enteredOnHome, setEnteredOnHome] = useState(false);

  return (
    <div>
      <PageCenter>
        <TextBox
          onMouseEnter={() => {
            setEnteredOnHome(true);
          }}
          onMouseLeave={() => {
            setEnteredOnHome(false);
          }}
        >
          {enteredOnHome ? (
            <CuteText
              fontsize="4.4vw"
              textshadow={true}
              fontfamily="Cute big font"
              textcolor="#7c1714"
            >
              Welcome to the home page!
            </CuteText>
          ) : (
            <CuteText
              fontsize="4vw"
              textshadow={true}
              fontfamily="Cute big font"
              textcolor="#fcf8f5"
            >
              Welcome to the home page!
            </CuteText>
          )}
        </TextBox>

        {enteredOnHome && (
          <BlogInfo left="25vw">
            {" "}
            <CuteText
              fontsize="3vw"
              textshadow={false}
              fontfamily="Big font"
              textcolor="#830e07"
            >
              Look at blogs
            </CuteText>
          </BlogInfo>
        )}

        {enteredOnHome && (
          <BlogInfo left="55vw">
            <CuteText
              fontsize="3vw"
              textshadow={false}
              fontfamily="Big font"
              textcolor="#830e07"
            >
              Create blogs
            </CuteText>
          </BlogInfo>
        )}
      </PageCenter>
    </div>
  );
};

export default Home;
