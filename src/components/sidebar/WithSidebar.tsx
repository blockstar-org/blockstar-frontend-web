import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { images } from "../../assets/images";
import {
  ExploreIcon,
  HomeIcon,
  MyVideoIcon,
  NotificationIcon,
  PersonaIcon
} from "../../assets/svgs/svg";
import {
  FlexColumn,
  FlexRow,
  ImageWrapper,
  P2,
  SVGWrapper
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import Button from "../button/Button";
import { CustomInput } from "../InputComponent/CustomInput";

export const WithSidebar = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props) => {
    const { pathname } = useLocation();

    return (
      <Container>
        <SidebarWrapper>
          <ImageWrapper
            src={images.blockStarLogo}
            alt="logo"
            style={{ marginBottom: "10px" }}
          />
          <RouteBlock isSelected={pathname == "/"}>
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
            <FlexRow gap="6px">
              <P2>Phillipe</P2>
              <ImageWrapper
                src={images.demoImage}
                alt="demoimage"
                style={{ borderRadius: "50%" }}
              />
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
