import styled from 'styled-components';
import imagem from '../../img/logo.svg';

// const Logo = styled.img`
//     background-image: url('../img/logo.svg');
// `

const LogoImg = () => {
    return (
        <div>
            <img src={imagem} alt='logo'></img>
        </div>
    )
}

export default LogoImg;