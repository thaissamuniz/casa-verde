import Newsletter from '../Newsletter';
import TextTwoElement from '../TextTwo'
import Image, { HeroImage } from '../ImageComp';
import PlantaBanner from '../../img/imagem-hero 1.svg'
import TextElement, { TextOneSmall } from '../TextOne';
import styled from 'styled-components';

const SectionTextBox = styled.section`
    display: flex;
    justify-content: center;
`

const DivTextBox = styled.div`
    padding: 114px 0 0 20px;
    max-width: 585px;
    box-sizing: border-box;
`
const TextBox = () => {
    return (
        <SectionTextBox>
            <DivTextBox>
                <TextElement text={'sua casa com as'} />
                <TextTwoElement text={'melhores plantas'} />
                <TextOneSmall>Encontre aqui uma vasta selecao de plantas para decorar a sua casa e torna-lo uma pessoa mais feliz no seu dia a dia. entre com seu email e assine nossa newsletter para saber das novidades da marca</TextOneSmall>
                <Newsletter />
            </DivTextBox>
            <div>
                <HeroImage src={PlantaBanner} alt='planta'/>
            </div>
        </SectionTextBox>
    )
}

export default TextBox;