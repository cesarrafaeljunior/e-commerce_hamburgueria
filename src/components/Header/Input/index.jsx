import { ContainerInput, StyledInput } from "./style";
import { Button } from "../../Button/index";
export const Input = () => {
  return (
    <ContainerInput id="Div__Header">
      <input type="text" placeholder="Digitar pesquisa" />
      <Button type="button">Pesquisar</Button>
    </ContainerInput>
  );
};
