import styled from 'styled-components';
import MenuElement from "../MenuItem";

const MenuElements = styled.ul`
    display: flex;
    padding: 0;
`

export const Menu = () => {
    const menuItens = ['Como fazer /', 'Ofertas /', 'Depoimentos /', 'Videos /', 'Meu Carrinho']
    return (
        <MenuElements>
            {
                menuItens.map(item => <MenuElement key={item} itemName={item} />)
            }
        </MenuElements>
    )
}