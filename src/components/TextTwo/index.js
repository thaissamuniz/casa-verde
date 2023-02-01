import styled from "styled-components";

const TextTwo = styled.h2`
    font-size: 82px;
    margin: 0;
    margin-bottom: 26px;
`

export const TextTwoSmall = styled(TextTwo)`
    font-size: 42px;

`

export const TextTwoCard = styled(TextTwo)`
    font-size: 32px;
`

const TextTwoElement = ({ text }) => {
    return (
        <div>
            <TextTwo>{text}</TextTwo>
        </div>
    )
}

export default TextTwoElement;

