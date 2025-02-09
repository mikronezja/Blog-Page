import styled from "styled-components";
import { NavbarText } from "../Styles/Navbar";

interface LinkProp {
  url: string;
  desc: string;
}

interface LinkPropArray {
  items: LinkProp[];
}
const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Links = ({ items }: LinkPropArray) => {
  return (
    <LinksWrapper>
      {items.map((item, index) => (
        <div key={index}>
          <NavbarText to={item.url}>
            <p>{item.desc}</p>
          </NavbarText>
        </div>
      ))}
    </LinksWrapper>
  );
};

export default Links;
