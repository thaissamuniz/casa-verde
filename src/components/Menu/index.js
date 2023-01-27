import MenuItem from "../MenuItem"

export const Menu = () => {
    const menuItens = ['Como fazer', 'Ofertas', 'Depoimentos', 'Videos', 'Meu Carrinho']
    return (
        <ul>
            {
                menuItens.map(item => <MenuItem key={item} itemName={item} />)
            }
        </ul>
    )
}