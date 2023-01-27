import styled from 'styled-components';
const MenuItem = styled.li`
    list-style-type: none;
`

const MenuLink = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;
    margin-right: 30px;
`
const MenuElement = ({ itemName }) => {
    return (
        <MenuItem>
            <MenuLink href="https://google.com">{itemName}</MenuLink>
        </MenuItem>
    )
}

export default MenuElement;