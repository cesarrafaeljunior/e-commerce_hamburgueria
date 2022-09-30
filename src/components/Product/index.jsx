import { Button } from "../Button";
import { StyledProducts } from "./style";

export const Products = ({ productsCart, setProductsCart, currentProduct }) => {
  const onCart = (product) => {
    const productCount = productsCart.map((elem) => {
      if (elem.id == product.id) {
        elem.count += 1;
        return elem;
      } else {
        return elem;
      }
    });
    setProductsCart(productCount);
  };

  const notCart = (elem) => {
    elem.count = 1;
    setProductsCart([...productsCart, elem]);
  };

  const addProductCart = (product) => {
    productsCart.some((elem) => elem.id == product.id)
      ? onCart(product)
      : notCart(product);
  };

  return (
    <StyledProducts>
      <figure>
        <img src={currentProduct.img} alt={currentProduct.name} />
      </figure>
      <h2>{currentProduct.name}</h2>
      <p>{currentProduct.category}</p>
      <p>{currentProduct.price.toFixed(2)}</p>
      <Button
        type="button"
        func={() => {
          addProductCart(currentProduct);
        }}
      >
        Adicionar
      </Button>
    </StyledProducts>
  );
};
