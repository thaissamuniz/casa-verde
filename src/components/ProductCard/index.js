import ImageComp from "../ImageComp"
import { TextTwoCard } from "../TextTwo"
import styled from 'styled-components'
import { TextOneSmall } from "../TextOne";
import BuyButton from "../BuyButton";

const Div = styled.div`
    display: flex;
    width: 379px;
    height: 200px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: white;
    margin-right: 31px;
    margin-bottom: 30px;
`

const DivContent = styled.div`
    padding-top: 27px;
`
const ProductCard = ({ name, preco, img }) => {
    return (
        <Div>
            <div>
                <ImageComp src={img} height={'200px'} width={'200px'} />
            </div>
            <DivContent>
                <TextTwoCard>{name}</TextTwoCard>
                <TextOneSmall>{preco}</TextOneSmall>
                <BuyButton />
            </DivContent>
        </Div>
    )
}

export default ProductCard;