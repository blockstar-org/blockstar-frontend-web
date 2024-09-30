import { FlexColumn, FlexRow, H2 } from "../../styles/sharedStyles";
import Button from "../button/Button";

export const Header = () => {
  return (
    <FlexRow padding="10px" width="100%" justifycontent='space-between' style={{border: '1px solid white'}}>
      <H2>BlockStar</H2>
      <Button text="Login" />
    </FlexRow>
  );
};
