import { List } from "../List";
import { ProductsCart } from "./CartProduct";
import { StyledCart } from "./style";

export const Cart = ({ productsCart, setProductsCart }) => {
  return (
    <StyledCart>
      <div className="Cart__Header">
        <h2>Carrinho de Compras</h2>
      </div>
      <List>
        {productsCart.map((currentProduct) => {
          return (
            <ProductsCart
              key={currentProduct.id}
              productsCart={productsCart}
              setProductsCart={setProductsCart}
              currentProduct={currentProduct}
            />
          );
        })}
      </List>
    </StyledCart>
  );
};
