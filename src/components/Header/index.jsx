import { StyledHeader } from "./style";

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <div>{children}</div>
    </StyledHeader>
  );
};
