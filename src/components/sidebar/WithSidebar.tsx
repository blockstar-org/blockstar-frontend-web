import styled from "styled-components";
import { images } from "../../assets/images";
import {
  ExploreIcon,
  MyVideoIcon,
  NotificationIcon,
  PersonaIcon,
} from "../../assets/svgs/svg";
import {
  FlexColumn,
  ImageWrapper,
  P2,
  SVGWrapper,
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import Button from "../button/Button";

export const WithSidebar = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props) => {
    return (
      <Container>
        <SidebarWrapper>
          <ImageWrapper
            src={images.blockStarLogo}
            alt="logo"
            style={{ marginBottom: "10px" }}
          />
          <RouteBlock>
            <SVGWrapper>
              <ExploreIcon />
            </SVGWrapper>
            <P2>Explore</P2>
          </RouteBlock>
          <RouteBlock>
            <SVGWrapper>
              <MyVideoIcon />
            </SVGWrapper>
            <P2>My Videos</P2>
          </RouteBlock>
          <RouteBlock>
            <SVGWrapper>
              <PersonaIcon />
            </SVGWrapper>
            <P2>Persona</P2>
          </RouteBlock>
          <RouteBlock>
            <SVGWrapper>
              <NotificationIcon />
            </SVGWrapper>
            <P2>Notifications</P2>
          </RouteBlock>
          <Button text="+ Create Video" style={{ width: "100%" }} />
        </SidebarWrapper>

        <WrappedComponent {...props} />
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

const RouteBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  /* max-height: 47.2px; */
  padding: 7.6px 13.6px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: ${colors.gradientGrey};
  }
`;
