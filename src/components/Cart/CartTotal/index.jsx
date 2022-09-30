import { Button } from "../../Button";
import { StyledTotalValue } from "./style";

export const TotalValue = () => {
  return (
    <StyledTotalValue>
      <div>
        <h2>Total</h2>
        <p>R$ 40.00</p>
      </div>
      <Button>Remover todos</Button>
    </StyledTotalValue>
  );
};
