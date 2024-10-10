import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { images } from "../../assets/images";
import {
  ExploreIcon,
  HomeIcon,
  MyVideoIcon,
  NotificationIcon,
  PersonaIcon
} from "../../assets/svgs/svg";
import { useLogOutMutation } from "../../integration/redux/apis/loginApi";
import { notify } from "../../main";
import {
  FlexColumn,
  FlexRow,
  ImageWrapper,
  P2,
  SVGWrapper
} from "../../styles/sharedStyles";
import { colors, fonts } from "../../styles/theme";
import Button from "../button/Button";
import { CustomInput } from "../InputComponent/CustomInput";

export const WithSidebar = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [showLogout, setLogout] = useState<boolean>(false);
    
    const [logoutUser, { error, isLoading }] = useLogOutMutation();
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setLogout(false);
      }
    };

    useEffect(() => {
      // Attach the event listener
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup the event listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const logout = async () => {
      try {
        await logoutUser();
        notify("Logged out successfully");
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
      } catch (err) {
        console.error({ err });
      }
    };

    return (
      <Container>
        <SidebarWrapper>
          <ImageWrapper
            src={images.blockStarLogo}
            alt="logo"
            style={{ marginBottom: "10px" }}
          />
          <RouteBlock
            isSelected={pathname == "/"}
            onClick={() => navigate("/")}
          >
            <SVGWrapper>
              <ExploreIcon />
            </SVGWrapper>
            <P2 size="16px">Explore</P2>
          </RouteBlock>

          <RouteBlock isSelected={pathname == "/my-videos"}>
            <SVGWrapper>
              <MyVideoIcon />
            </SVGWrapper>
            <P2 size="16px">My Videos</P2>
          </RouteBlock>

          <RouteBlock isSelected={pathname == "/persona"}>
            <SVGWrapper>
              <PersonaIcon />
            </SVGWrapper>
            <P2 size="16px">Persona</P2>
          </RouteBlock>

          <RouteBlock isSelected={pathname == "/notifications"}>
            <SVGWrapper>
              <NotificationIcon />
            </SVGWrapper>
            <P2 size="16px">Notifications</P2>
          </RouteBlock>
          <Button text="+ Create Video" style={{ width: "100%" }} />
        </SidebarWrapper>

        <FlexColumn justifycontent="flex-start" alignitems="flex-start">
          <GlobalSearchWrapper>
            <FlexRow gap="20px" justifycontent="flex-start">
              <SVGWrapper>
                <HomeIcon />
              </SVGWrapper>
              <CustomInput />
            </FlexRow>
            <FlexRow
              gap="6px"
              position="relative"
              cursor="pointer"
              onClick={() => setLogout((prev) => !prev)}
              ref={dropdownRef}
            >
              <P2>Phillipe</P2>
              <ImageWrapper
                src={images.demoImage}
                alt="demoimage"
                style={{ borderRadius: "50%", cursor: "pointer" }}
              />
              {showLogout && (
                <OptionWrapper>
                  <Type onClick={() => logout()}>Logout</Type>
                </OptionWrapper>
              )}
            </FlexRow>
          </GlobalSearchWrapper>
          <WrappedComponent {...props} />
        </FlexColumn>
      </Container>
    );
  };
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
`;

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  border-right: var(--Stroke_br_normal, 1px) solid rgba(71, 84, 103, 0.5);
`;

const RouteBlock = styled.div<{ isSelected? }>`
  width: 100%;
  display: flex;
  gap: 16px;
  height: 42px;
  padding: 8px 13px 8px 13px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ isSelected }) => isSelected && colors.gradientGrey};
  &:hover {
    background: ${colors.gradientGrey};
  }
`;

const GlobalSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 11.5px 16px 12.5px 16px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: var(--Stroke_br_normal, 1px) solid rgba(71, 84, 103, 0.5);
`;

const OptionWrapper = styled.div`
  width: max-content;
  position: absolute;
  top: 45px;
  left: -10px;
  display: flex;
  padding: 17px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: var(--border-radius, 8px);
  border: var(--Stroke_br_lt-2, 0.5px) solid ${colors.gray};
  background: ${colors.darkpurple};

  /* backshadow */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  max-height: 130px;
  min-height: fit-content;
  overflow: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
`;

export const Type = styled.div<{ isSelected? }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border-radius: var(--border-radius, 8px);
  border: ${({ isSelected }) => isSelected && `1px solid ${colors.grayLight}`};
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  /* Body 1 medium */
  font-family: ${fonts.SansRegular};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 15.6px */
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    border: var(--Stroke_br_normal, 1px) solid ${colors.grayLight};
  }
`;
