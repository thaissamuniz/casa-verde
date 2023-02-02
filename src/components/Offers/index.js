import ProductCard from "../ProductCard";
import Text from "../Text"
import Planta1 from '../../img/produto-01 1.png'
import Planta2 from '../../img/produto-02 1.svg'
import Planta3 from '../../img/produto-03 1.png'
import styled from "styled-components";

const DivOffers = styled.div`
    display: flex;
    justify-content: center;
`

const Offers = () => {
    return (
        <div>
            <Text frtsText={'Conheça nossas'} scndText={'ofertas'} />

            <DivOffers>
                <ProductCard name={'Ajuga Reptans'} preco={'R$ 20,00'} img={Planta1} />
                <ProductCard name={'Ajuga Reptans'} preco={'R$ 20,00'} img={Planta2} />
                <ProductCard name={'Ajuga Reptans'} preco={'R$ 20,00'} img={Planta3} />
            </DivOffers>
        </div>
    )
}

export default Offers;