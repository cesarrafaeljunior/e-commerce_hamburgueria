import { ContainerInput, StyledInput } from "./style";
import { Button } from "../../Button/index";
export const Input = () => {
  return (
    <ContainerInput>
      <input type="text" placeholder="Digitar pesquisa" />
      <Button type="button">Pesquisar</Button>
    </ContainerInput>
  );
};
