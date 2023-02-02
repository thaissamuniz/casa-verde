import styled from "styled-components";
export const HeroImage = styled.img`
    position: relative;
    top: -77px;
    right: 140px;
`
const Image = ({ src, alt, width, height }) => {
    return (
        <img src={src} alt={alt} width={width} height={height}></img>
    )
}

export default Image;