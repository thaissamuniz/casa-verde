import styled from "styled-components";
// import Ellipse from "../../img/Ellipse 1.svg";

const TextOne = styled.p`
    /* font-family: Montserrat', sans-serif; */
    font-size: 22px;
    margin: 0;
    line-height: 26px;
    color: #202020;
    opacity: 0.5;
    margin-bottom: 12px;
`
export const TextOneSmall = styled(TextOne)`
    font-size: 16px;
    margin-bottom: 20px;
`

export const TextOneEllipse = styled(TextOne)`
    background-image: url('../../img/Ellipse 1.svg');
`

const TextElement = ({ text }) => {
    return (
        <div>
            <TextOne>{text}</TextOne>
        </div>
    )
}

export default TextElement;