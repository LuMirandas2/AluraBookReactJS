import Logo from "../Logo";
import IconesHeader from "../IconesHeader";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";

const HeaderConteiner = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderConteiner>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderConteiner>
  );
}

export default Header;
