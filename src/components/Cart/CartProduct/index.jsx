import { useState } from "react";
import { StyledProductsCart } from "./style";

export const ProductsCart = ({
  productsCart,
  setProductsCart,
  currentProduct,
}) => {
  const [animation, setAnimation] = useState("entrada");

  const removeProductCart = (product) => {
    const productRemove = productsCart.map((elem) => {
      if (elem.id == product.id) {
        elem.count -= 1;
        if (elem.count < 1) {
          setAnimation("saida");
        }
        return elem;
      } else {
        return elem;
      }
    });

    setTimeout(() => {
      const removeProductCart = productRemove.filter((elem) => {
        return elem.count > 0;
      });
      setProductsCart(removeProductCart);
    }, 250);
  };

  return (
    <StyledProductsCart animationName={animation}>
      <figure>
        <img src={currentProduct.img} alt={currentProduct.name} />
      </figure>
      <div className="Box__Name">
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.category}</p>
      </div>
      <div className="Box__Qtd">
        <p
          className="btnRemover"
          onClick={() => {
            removeProductCart(currentProduct);
          }}
        >
          Remover
        </p>
        <p>Qtd: {currentProduct.count}</p>
      </div>
    </StyledProductsCart>
  );
};
