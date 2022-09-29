import { Container } from "./components/Container/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Input } from "./components/Header/Input/index.jsx";
import { Logo } from "./components/Header/Logo/index.jsx";
import { List } from "./components/List/index.jsx";
import { StyledMain } from "./App.js";
import { Products } from "./components/Product/index.jsx";
import { Section } from "./components/Section/index.jsx";
import { Cart } from "./components/Cart/index.jsx";

function App() {
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
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </List>
        </Section>
        <Section>
          <Cart />
        </Section>
      </StyledMain>
    </>
  );
}

export default App;
