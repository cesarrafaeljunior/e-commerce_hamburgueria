import { Button } from "../Button";
import { StyledProducts } from "./style";
import Hamburguer from "./img/hamburguer.png";

export const Products = () => {
  return (
    <StyledProducts>
      <figure>
        <img src={Hamburguer} alt="Lanche Kenzie" />
      </figure>
      <h2>Big Kenzie</h2>
      <p>Sanduíches</p>
      <p>R$ 18.00</p>
      <Button type="button">Adicionar</Button>
    </StyledProducts>
  );
};
