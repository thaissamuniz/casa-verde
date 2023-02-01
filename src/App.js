import Header from './components/Header';
import HomeCard from './components/HomeCard';
import LogoImg from './components/Logo';
import { Menu } from './components/Menu';
import Offers from './components/Offers';
import ProductCard from './components/ProductCard';
import TextBox from './components/TextBox';
import Planta from './img/produto-01 1.png'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TextBox />
        <HomeCard />
        {/* <ProductCard name={'Ajuga Reptans'} preco={'R$ 20,00'} img={Planta} /> */}
        <Offers />
      </main>
    </div>
  );
}

export default App;
