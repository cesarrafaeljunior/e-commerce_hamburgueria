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
import { SearchResults } from "./components/SearchResults/index.jsx";

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

  /*Filter Search*/
  const [inputTextSearch, setInputTextSearch] = useState("");
  const [valueInput, setValueInput] = useState("");

  const filterProducts =
    valueInput.length > 0
      ? productsArray.filter((product) =>
          product.name.toLowerCase().includes(valueInput)
        )
      : [];

  return (
    <>
      <Header>
        <Container>
          <Logo />
          <Input
            setInputTextSearch={setInputTextSearch}
            setValueInput={setValueInput}
          />
        </Container>
      </Header>
      <StyledMain>
        <Section>
          {inputTextSearch.length > 0 && (
            <SearchResults
              setInputTextSearch={setInputTextSearch}
              inputTextSearch={inputTextSearch}
              setValueInput={setValueInput}
            />
          )}

          <List>
            {filterProducts.length > 0
              ? filterProducts.map((elem) => (
                  <Products
                    key={elem.id}
                    productsCart={productsCart}
                    setProductsCart={setProductsCart}
                    currentProduct={elem}
                  />
                ))
              : productsArray.map((elem) => (
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
            <TotalValue
              setProductsCart={setProductsCart}
              productsCart={productsCart}
            />
          )}
        </Section>
      </StyledMain>
    </>
  );
}

export default App;
