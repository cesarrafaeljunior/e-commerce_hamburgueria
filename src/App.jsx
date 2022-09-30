import { Container } from "./components/Container/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Input } from "./components/Header/Input/index.jsx";
import { Logo } from "./components/Header/Logo/index.jsx";
import { List } from "./components/List/index.jsx";
import { StyledMain } from "./App.js";
import { Products } from "./components/Product/index.jsx";
import { Section } from "./components/Section/index.jsx";
import { Cart } from "./components/Cart/index.jsx";
import { useEffect, useState } from "react";
import { getProducts } from "./services/getProducts.js";
import { TotalValue } from "./components/Cart/CartTotal/index.jsx";

function App() {
  /*Vitrine*/
  const [productsArray, setProducts] = useState([]);

  const sucessResponse = (data) => {
    setProducts(data);
  };

  const errorResponse = (error) => {
    console.log(error);
  };

  useEffect(() => {
    getProducts(sucessResponse, errorResponse);
  }, []);
  /*-----------------------------------------------*/

  /*Cart */
  const [productsCart, setProductsCart] = useState([]);
  console.log(productsCart);
  return (
    <>
      <Header>
        <Container>
          <Logo />
          <Input />
        </Container>
      </Header>
      <StyledMain>
        <Section>
          <List>
            {productsArray.map((elem) => (
              <Products
                key={elem.id}
                productsCart={productsCart}
                setProductsCart={setProductsCart}
                currentProduct={elem}
              />
            ))}
          </List>
        </Section>
        <Section>
          <Cart productsCart={productsCart} setProductsCart={setProductsCart} />
          {productsCart.length > 0 && (
            <TotalValue productsCart={productsCart} />
          )}
        </Section>
      </StyledMain>
    </>
  );
}

export default App;
