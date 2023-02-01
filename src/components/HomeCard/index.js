import Image from "../ImageComp"
import styled from "styled-components"
import CardImage from '../../img/image 3.png'
import TextElement, { TextOneEllipse } from "../TextOne"
import TextTwoElement, { TextTwoSmall } from "../TextTwo"

const CardSec = styled.section`
    display: flex;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 995px;
    margin: 0 auto;
    position: relative;
    bottom: 170px;
`

const DivHomeCard = styled.div`
    padding-left: 21px;
`

const HomeCard = () => {
    return (
        <CardSec>
            <div>
                <Image src={CardImage} alt={'costela de adão'} />
            </div>
            <DivHomeCard>
                <TextElement text={'Como conseguir'} />
                <TextTwoSmall>minha planta</TextTwoSmall>
                <TextOneEllipse>Escolha suas plantas</TextOneEllipse>
                <TextElement text={'Faça seu pedido'} />
                <TextElement text={'Aguarde na sua casa'} />
            </DivHomeCard>
        </CardSec>
    )
}

export default HomeCard;