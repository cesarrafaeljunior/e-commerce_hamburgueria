import { Button } from "../../Button";
import { StyledTotalValue } from "./style";

export const TotalValue = ({ productsCart }) => {
  const total = productsCart.reduce((valAnt, acc) => {
    return valAnt + acc.price * acc.count;
  }, 0);

  return (
    <StyledTotalValue>
      <div>
        <h2>Total</h2>
        <p>R$ {total.toFixed(2)}</p>
      </div>
      <Button>Remover todos</Button>
    </StyledTotalValue>
  );
};
