import { useState } from "react";
import { images } from "../../assets/images";
import { BackIcon, ScriptIcon } from "../../assets/svgs/svg";
import Button from "../../components/button/Button";
import { CustomInput } from "../../components/InputComponent/CustomInput";
import { InputComponent } from "../../components/InputComponent/InputComponent";
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
  CreationVideo,
  GridTab,
  SelectionContainer,
  SelectWrapper,
  Tag,
  Type,
  TypeWrapper,
} from "./createvideo.style";
import { GeneratedVideo } from "./GeneratedVideo";
import { VideoScript } from "./VideoScript";

export const CreateVideo = () => {
  const [isScript, setIsScript] = useState<boolean>(false);
  const [generatedVideo, setGeneratedVideo] = useState<boolean>(false);

  return (
    <Container>
      <FlexRow padding="10px 7px" gap="10px" style={{ cursor: "pointer" }}>
        <SVGWrapper>
          <BackIcon />
        </SVGWrapper>
        <P2 size="19px">Back</P2>
      </FlexRow>
      <SelectWrapper>
        {generatedVideo ? (
          <GeneratedVideo />
        ) : (
          <SelectionContainer>
            <CustomInput />
            <FlexColumn
              gap="10px"
              justifycontent="flex-start"
              alignitems="flex-start"
            >
              <FlexRow gap="10px">
                <Tag>1</Tag>
                <P2>Select Your Video Speaker Type </P2>
              </FlexRow>
              <TypeWrapper>
                <Type>Expert</Type>
                <Type>Tech reviewer/Tech visionary</Type>
                <Type>Tech reviewer/Tech visionary</Type>
                <Type>Tech reviewer/Tech visionary</Type>
                <Type>Expert</Type>
              </TypeWrapper>
            </FlexColumn>
            {/* Intro */}
            <FlexColumn
              gap="10px"
              justifycontent="flex-start"
              alignitems="flex-start"
            >
              <FlexRow gap="10px">
                <Tag>2</Tag>
                <P2>Select Your Intro Videos</P2>
              </FlexRow>
              <GridTab gap={"10px"}>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
              </GridTab>
            </FlexColumn>
            {/* Outro */}
            <FlexColumn
              gap="10px"
              justifycontent="flex-start"
              alignitems="flex-start"
            >
              <FlexRow gap="10px">
                <Tag>3</Tag>
                <P2>Select Your Outro Videos</P2>
              </FlexRow>
              <GridTab gap={"10px"}>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
                <CreationVideo width={"180px"} height={"125px"}>
                  <ImageWrapper
                    src={images.thumbnail}
                    alt="thumbnail"
                    height={"auto"}
                  />
                  <FlexRow width="100%" justifycontent="space-between">
                    <P2 color={colors.grayLight} size="13px">
                      Video Name
                    </P2>
                  </FlexRow>
                </CreationVideo>
              </GridTab>
            </FlexColumn>
            <Button
              text="Select To Generate Video Script"
              style={{ width: "100%" }}
              onClick={() => setIsScript(true)}
            />
          </SelectionContainer>
        )}
        {isScript ? (
          <VideoScript setGeneratedVideo={setGeneratedVideo} setIsScript={setIsScript}/>
        ) : !generatedVideo && (
          <FlexColumn gap="68px">
            <SVGWrapper>
              <ScriptIcon />
            </SVGWrapper>
            <FlexColumn gap="5px">
              <P1>Please Select Default type</P1>
              <P2>for generating video Script</P2>
            </FlexColumn>
          </FlexColumn>
        )}
      </SelectWrapper>
    </Container>
  );
};
