import { StyledButton } from "./style";

export const Button = ({ func, children }) => {
  return <StyledButton onClick={func}>{children}</StyledButton>;
};
