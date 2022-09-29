import { StyledProductsCart } from "./style";
import Hamburguer from "./img/hamburguer.png";

export const ProductsCart = () => {
  return (
    <StyledProductsCart>
      <figure>
        <img src={Hamburguer} alt="Lanche Kenzie" />
      </figure>
      <div>
        <h2>Big Kenzie</h2>
        <p>Sanduíches</p>
      </div>
      <p className="btnRemover">Remover</p>
    </StyledProductsCart>
  );
};
