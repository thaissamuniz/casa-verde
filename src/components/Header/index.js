import styled from "styled-components";
import LogoImg from "../Logo";
import { Menu } from "../Menu";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`

const Header = () => {
    return (
        <HeaderStyled>
            <LogoImg />
            <Menu />
        </HeaderStyled>
    )
}

export default Header;