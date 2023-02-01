import styled from "styled-components";

const BuyButtonStyle = styled.a`
    color: #FFCB47;
    text-decoration: none;
`
const BuyButton = () => {
    return (
        <BuyButtonStyle href="#">Comprar</BuyButtonStyle>
    )
}

export default BuyButton;