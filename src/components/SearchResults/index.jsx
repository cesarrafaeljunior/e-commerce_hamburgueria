import { Button } from "../Button";
import { StyledSearch } from "./style";

export const SearchResults = ({
  setInputTextSearch,
  inputTextSearch,
  setValueInput,
}) => {
  const cleanSearch = () => {
    setValueInput([]);
    setInputTextSearch("");
  };

  return (
    <StyledSearch>
      <div>
        <h2>Resultado para: </h2>
        <p>{inputTextSearch}</p>
      </div>
      <Button func={() => cleanSearch()}>Limpar busca</Button>
    </StyledSearch>
  );
};
