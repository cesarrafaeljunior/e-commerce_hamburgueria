import { StyledProductsCart } from "./style";

export const ProductsCart = ({
  productsCart,
  setProductsCart,
  currentProduct,
}) => {
  const removeProductCart = (product) => {
    const productRemove = productsCart.map((elem) => {
      if (elem.id == product.id) {
        elem.count -= 1;
        return elem;
      } else {
        return elem;
      }
    });

    const removeProductCart = productRemove.filter((elem) => {
      return elem.count > 0;
    });
    setProductsCart(removeProductCart);
  };

  return (
    <StyledProductsCart>
      <figure>
        <img src={currentProduct.img} alt={currentProduct.name} />
      </figure>
      <div>
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.category}</p>
      </div>
      <p
        className="btnRemover"
        onClick={() => {
          removeProductCart(currentProduct);
        }}
      >
        Remover
      </p>
      <p>{currentProduct.count}</p>
    </StyledProductsCart>
  );
};
