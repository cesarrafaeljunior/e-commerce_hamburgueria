import { ContainerInput, StyledInput } from "./style";
import { Button } from "../../Button/index";
import { useState } from "react";
export const Input = ({ setValueInput }) => {
  const [input, setInput] = useState("");

  const getValue = () => {
    setValueInput(input.toLowerCase());
  };

  return (
    <ContainerInput id="Div__Header">
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button type="button" func={() => getValue()}>
        Pesquisar
      </Button>
    </ContainerInput>
  );
};
