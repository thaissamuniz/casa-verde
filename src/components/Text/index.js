import TextElement from "../TextOne"
import TextTwoElement from "../TextTwo"
import styled from "styled-components"

const TextAlg = styled.div`
    text-align: center;
`

const Text = ({ frtsText, scndText }) => {
    return (
        <TextAlg>
            <TextElement text={frtsText} />
            <TextTwoElement text={scndText} />
        </TextAlg>
    )
}

export default Text;