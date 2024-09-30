import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../integration/redux/apis/loginApi";
import { FlexColumn, FlexRow, H2 } from "../../styles/sharedStyles";
import { variables } from "../../utilities/constants";
import Button from "../button/Button";

export const Header = () => {
  const navigate = useNavigate();
  const [logout] = useLogOutMutation();
  const isLoggedIn = localStorage.getItem(variables.accessToken) ? true : false;
  return (
    <FlexRow
      padding="10px"
      width="100%"
      justifycontent="space-between"
      style={{ border: "1px solid white" }}
    >
      <H2>BlockStar</H2>
      {isLoggedIn ? (
        <Button
          text="LogOut"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        />
      ) : (
        <Button text="Login" onClick={() => navigate("/login")} />
      )}
    </FlexRow>
  );
};
