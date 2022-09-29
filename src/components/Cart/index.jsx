import { List } from "../List";
import { ProductsCart } from "./CartProduct";
import { StyledCart } from "./style";

export const Cart = () => {
  return (
    <StyledCart>
      <div className="Cart__Header">
        <h2>Carrinho de Compras</h2>
      </div>
      <List>
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
      </List>
    </StyledCart>
  );
};
