import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { images } from "../../assets/images";
import {
  ArticleIcon,
  CalenderIcon,
  MicIcon,
  PersonaIcon,
  TimerIcon,
} from "../../assets/svgs/svg";
import Button from "../../components/button/Button";
import CustomModal from "../../components/customModal/CustomModal";
import { CustomInput } from "../../components/InputComponent/CustomInput";
import { TextInput } from "../../components/InputComponent/TextInput";
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
import {
  Container,
  CreateCard,
  CreationVideo,
  DetailTag,
  GridTab,
  VericalLine,
  VideoCreatedDetails,
  VideoProgressBar,
} from "./explore.style";

export const Explore = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
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
          <CreateCard onClick={() => setOpenModal(true)}>
            <ImageWrapper
              src={images.news}
              alt="news"
              height={"48px"}
              width={"48px"}
            />
            <P1>Create Videos From News</P1>
          </CreateCard>
          <CreateCard onClick={() => setOpenModal(true)}>
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
          <VericalLine color={colors.teal} />
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
          <Button text="In progress" />
        </VideoProgressBar>
      </FlexColumn>
      {/* Created Videos */}
      <VideoCreatedDetails>
        <DetailTag>Created Videos Detail</DetailTag>
        <VericalLine color={colors.fuchsia} />
        <GridTab>
          <FlexColumn gap="5px" alignitems="flex-start">
            <P1 size="20px">21017523</P1>
            <P2 size="12px" color={colors.grayLight}>
              Total videos Created
            </P2>
          </FlexColumn>
          <FlexColumn gap="5px" alignitems="flex-start">
            <P1 size="20px">21017523</P1>
            <P2 size="12px" color={colors.grayLight}>
              Total videos uploaded
            </P2>
          </FlexColumn>
          <FlexColumn gap="5px" alignitems="flex-start">
            <P1 size="20px">21017523</P1>
            <P2 size="12px" color={colors.grayLight}>
              Total Videos created not uploaded
            </P2>
          </FlexColumn>
          <FlexColumn gap="5px" alignitems="flex-start">
            <P1 size="20px">21017523</P1>
            <P2 size="12px" color={colors.grayLight}>
              Total short videos
            </P2>
          </FlexColumn>
          <FlexColumn gap="5px" alignitems="flex-start">
            <P1 size="20px">21017523</P1>
            <P2 size="12px" color={colors.grayLight}>
              Videos created and uploaded by cto
            </P2>
          </FlexColumn>
          <FlexColumn gap="5px" alignitems="flex-start">
            <P1 size="20px">21017523</P1>
            <P2 size="12px" color={colors.grayLight}>
              Videos created and uploaded by ceo
            </P2>
          </FlexColumn>
        </GridTab>
      </VideoCreatedDetails>
      {/* Creations */}
      <FlexColumn
        justifycontent="flex-start"
        alignitems="flex-start"
        gap="18px"
        width="100%"
      >
        <P2>Creations</P2>
        <GridTab gap="24px">
          <CreationVideo>
            <ImageWrapper src={images.thumbnail} alt="thumbnail" />
            <FlexRow width="100%" justifycontent="space-between">
              <P2 color={colors.grayLight}>Video Name</P2>
              <FlexRow gap="10px">
                <SVGWrapper>
                  <CalenderIcon />
                </SVGWrapper>
                <P2 color={colors.grayLight}>Created Date: 22-12-2025</P2>
              </FlexRow>
            </FlexRow>
          </CreationVideo>

          <CreationVideo>
            <ImageWrapper src={images.thumbnail} alt="thumbnail" />
            <FlexRow width="100%" justifycontent="space-between">
              <P2 color={colors.grayLight}>Video Name</P2>
              <FlexRow gap="10px">
                <SVGWrapper>
                  <CalenderIcon />
                </SVGWrapper>
                <P2 color={colors.grayLight}>Created Date: 22-12-2025</P2>
              </FlexRow>
            </FlexRow>
          </CreationVideo>

          <CreationVideo>
            <ImageWrapper src={images.thumbnail} alt="thumbnail" />
            <FlexRow width="100%" justifycontent="space-between">
              <P2 color={colors.grayLight}>Video Name</P2>
              <FlexRow gap="10px">
                <SVGWrapper>
                  <CalenderIcon />
                </SVGWrapper>
                <P2 color={colors.grayLight}>Created Date: 22-12-2025</P2>
              </FlexRow>
            </FlexRow>
          </CreationVideo>

          <CreationVideo>
            <ImageWrapper src={images.thumbnail} alt="thumbnail" />
            <FlexRow width="100%" justifycontent="space-between">
              <P2 color={colors.grayLight}>Video Name</P2>
              <FlexRow gap="10px">
                <SVGWrapper>
                  <CalenderIcon />
                </SVGWrapper>
                <P2 color={colors.grayLight}>Created Date: 22-12-2025</P2>
              </FlexRow>
            </FlexRow>
          </CreationVideo>
        </GridTab>
      </FlexColumn>

      {openModal && (
        <CustomModal showCloseIcon onClose={() => setOpenModal(false)}>
          <FlexColumn width="100%" alignitems="flex-start" gap="36px">
            <FlexRow
              width="100%"
              gap="30px"
              alignitems="center"
              justifycontent="flex-start"
            >
              <P2 size="28px">What is your video about?</P2>
              <P2>Dropdown</P2>
            </FlexRow>

            <FlexColumn width="100%" alignitems="flex-start" gap="17px">
              <P2>Add video description</P2>
              <TextInput placeholder="Enter text to describe the video you wish to create. (Ex: Social Selling 101 with)" />
              <TagGrid>
                <Tag>
                  <SVGWrapper height="20px" width="20px">
                    <PersonaIcon />
                  </SVGWrapper>
                  <P2>CEO</P2>
                </Tag>
                <Tag>
                  <SVGWrapper height="20px" width="20px">
                    <MicIcon />
                  </SVGWrapper>
                  <P2>Professional voice</P2>
                </Tag>
                <Tag>
                  <SVGWrapper height="20px" width="20px">
                    <TimerIcon />
                  </SVGWrapper>
                  <P2>2 min</P2>
                </Tag>
              </TagGrid>
            </FlexColumn>
            <Button
              text="Submit"
              style={{ width: "100%" }}
              onClick={() => navigate("/create-video")}
            />
          </FlexColumn>
        </CustomModal>
      )}
    </Container>
  );
};

const TagGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
`;

const Tag = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 4px;
  border-radius: var(--border-radius, 8px);
  border: var(--Stroke_br_normal, 1px) solid ${colors.gray};
  background: ${colors.primary};
`;
