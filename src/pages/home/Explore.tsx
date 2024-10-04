import { images } from "../../assets/images";
import { ArticleIcon } from "../../assets/svgs/svg";
import Button from "../../components/button/Button";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import {
  FlexColumn,
  FlexRow,
  ImageWrapper,
  P1,
  P2,
  SVGWrapper,
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import { Container, CreateCard, VideoProgressBar } from "./explore.style";

export const Explore = () => {
  return (
    <Container>
      {/* Create */}
      <FlexColumn
        justifycontent="flex-start"
        alignitems="flex-start"
        gap="18px"
      >
        <P2 size="28px">Explore</P2>
        <FlexRow gap="10px" justifycontent="flex-start">
          <CreateCard>
            <ImageWrapper
              src={images.news}
              alt="news"
              height={"48px"}
              width={"48px"}
            />
            <P1>Create Videos From News</P1>
          </CreateCard>
          <CreateCard>
            <SVGWrapper height={"48px"} width={"48px"}>
              <ArticleIcon />
            </SVGWrapper>
            <P1>Create Videos From Article</P1>
          </CreateCard>
        </FlexRow>
      </FlexColumn>
      {/* Progress videos */}
      <FlexColumn
        justifycontent="flex-start"
        alignitems="flex-start"
        gap="18px"
        width="100%"
      >
        <P2>Current Videos Upload Status</P2>
        <VideoProgressBar>
          <FlexRow gap="24px">
            <FlexRow gap="22px">
              <ImageWrapper
                src={images.demoVideoImage}
                alt="image"
                height={"70px"}
                width={"116px"}
                style={{ borderRadius: "7px" }}
              />
              <FlexColumn
                gap="5px"
                justifycontent="flex-start"
                alignitems="flex-start"
              >
                <P1>Dana Love</P1>
                <P1>Video Name</P1>
                <P1 color={colors.grayLight}>ID 12345</P1>
              </FlexColumn>
            </FlexRow>
            {/* progress Bar */}
            <FlexColumn
              gap="4px"
              width="280px"
              justifycontent="flex-start"
              alignitems="flex-start"
            >
              <FlexRow gap="5px">
                <P2 size="18px">30%</P2>
                <P1 color={colors.grayLight} size="10px">
                  In Progress
                </P1>
              </FlexRow>
              <ProgressBar width="30%" />
            </FlexColumn>
          </FlexRow>
          <Button text="In progress"/>
        </VideoProgressBar>
      </FlexColumn>
    </Container>
  );
};
