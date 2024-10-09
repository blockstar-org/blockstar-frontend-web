import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import {
  BackIcon,
  CheckIcon,
  ScriptIcon,
  TickIcon,
} from "../../assets/svgs/svg";
import Button from "../../components/button/Button";
import { CustomInput } from "../../components/InputComponent/CustomInput";
import ShimmerCard from "../../components/shimmerCard/ShimmerCard";
import { useLazyGetPersonaQuery } from "../../integration/redux/apis/brandApi";
import { useGenerateVideoMutation } from "../../integration/redux/apis/generateApi";
import { useAppDispatch, useAppSelector } from "../../integration/redux/hooks";
import {
  setIntroVideoId,
  setOutroVideoId,
  setSpeaker,
} from "../../integration/redux/slice/generateslice";
import { RootState } from "../../integration/redux/store";
import {
  FlexColumn,
  FlexRow,
  ImageWrapper,
  P1,
  P2,
  SVGWrapper,
  VideoWrapper,
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import { token, variables } from "../../utilities/constants";
import {
  Container,
  CreationVideo,
  GridTab,
  SelectDefault,
  SelectionContainer,
  SelectTag,
  SelectWrapper,
  Tag,
  Title,
  Type,
  TypeWrapper,
} from "./createvideo.style";
import { GeneratedVideo } from "./GeneratedVideo";
import { VideoScript } from "./VideoScript";

export const CreateVideo = () => {
  const [isScript, setIsScript] = useState<boolean>(false);
  const [personaData, setPersonaData] = useState<any>();
  const [generateVideo, { error: generateError, isLoading: generateloading }] =
    useGenerateVideoMutation();
  const [videoType, setVideoType] = useState<string>("Expert");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const [generatedVideo, setGeneratedVideo] = useState<boolean>(false);
  const navigate = useNavigate();
  const [getPersona, { error, isFetching }] = useLazyGetPersonaQuery();
  const generateValues = useAppSelector((state: RootState) => state.generate);
  const [script, setScript] = useState<string>("");
  const [scriptId, setScriptId] = useState<string>("");
  const [defaultVideo, setDefaultVideos] = useState<any>({
    defaultIntroVideo: "",
    defaultOutroVideo: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setScript(e.target.value);
    console.log({ val: e.target.value });
  };

  const fetchPersonaData = async (_id) => {
    try {
      const resp = await getPersona({ _id });
      setPersonaData(resp?.data?.data?.personas[0]);
      setDefaultVideos({
        defaultIntroVideo: resp?.data?.data?.personas[0]?.defaultIntroVideoId,
        defaultOutroVideo: resp?.data?.data?.personas[0]?.defaultOutroVideoId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const generateScript = async () => {
    try {
      setIsGenerating(true);
      const script = await generateVideo(generateValues);
      console.log({ script });
      setScriptId(script.data.data.script._id);
      //   getScript(script.data.data.script._id)
      //   setIsScript(true);
    } catch (err) {
      console.error({ err });
    }
  };

  useEffect(() => {
    if (generateValues?.personaId) {
      fetchPersonaData(generateValues?.personaId);
    } else {
      navigate("/");
    }
  }, []);

  const [messages, setMessages] = useState<any>();

  useEffect(() => {
    const startSSE = async () => {
      const eventSource = new EventSource(
        `https://backend-blockstar1-dev.rapidinnovation.tech/api/v1/events/get-video-script/${scriptId}?token=${token}`
      );

      eventSource.onmessage = (event) => {
        const newMessage = event.data;
        console.log({ newMessage });

        setMessages(JSON.parse(newMessage));
        setIsGenerating(false);
        setIsScript(true);
      };

      eventSource.onerror = (error) => {
        console.error("EventSource failed:", error);
        eventSource.close(); // Optionally close the connection on error
      };

      // Cleanup the connection
      return () => {
        eventSource.close();
      };
    };
    if (scriptId) startSSE();
  }, [scriptId]);

  const handleLoadedMetadata = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = event.currentTarget;
    video.currentTime = 5; // Skip to the specified seconds
  };

  return (
    <Container>
      <FlexRow
        padding="10px 7px"
        gap="10px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (generatedVideo) setGeneratedVideo(false);
          else navigate(-1);
        }}
      >
        <SVGWrapper>
          <BackIcon />
        </SVGWrapper>
        <P2 size="19px">Back</P2>
      </FlexRow>
      <SelectWrapper>
        {generatedVideo ? (
          <GeneratedVideo script={messages.scriptData.script} />
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
                <Type
                  onClick={() => {
                    dispatch(setSpeaker("Expert"));
                  }}
                  isSelected={generateValues.speaker == "Expert"}
                >
                  Expert
                </Type>
                <Type
                  onClick={() =>
                    dispatch(setSpeaker("Tech reviewer/Tech visionary"))
                  }
                  isSelected={
                    generateValues.speaker == "Tech reviewer/Tech visionary"
                  }
                >
                  Tech reviewer/Tech visionary
                </Type>
                <Type
                  onClick={() => dispatch(setSpeaker("Industry professional"))}
                  isSelected={generateValues.speaker == "Industry professional"}
                >
                  Industry professional
                </Type>
                <Type
                  onClick={() => dispatch(setSpeaker("Entrepreneur"))}
                  isSelected={generateValues.speaker == "Entrepreneur"}
                >
                  Entrepreneur
                </Type>
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
                {isFetching
                  ? [1, 2, 3].map((data, key) => (
                      <ShimmerCard width={"180px"} height={"125px"} key={key} />
                    ))
                  : personaData?.introVideos?.map((data, key) => (
                      <CreationVideo width={"180px"} height={"125px"} key={key}>
                        {/* <ImageWrapper
                          src={data?.metadata?.url || images.thumbnail}
                          alt="thumbnail"
                          height={"100px"}
                          width="100%"
                        /> */}
                        <VideoWrapper
                          height={"100px"}
                          width="100%"
                          onLoadedMetadata={handleLoadedMetadata}
                          controls
                        >
                          <source src={data?.metadata?.url} type="video/mp4" />
                        </VideoWrapper>
                        <FlexRow width="100%" justifycontent="space-between">
                          <P2 color={colors.grayLight} size="13px">
                            {data?.name}
                          </P2>
                        </FlexRow>
                        <SelectDefault
                          isSelected={
                            data?._id == defaultVideo.defaultIntroVideo
                          }
                        >
                          <SVGWrapper>
                            <CheckIcon />
                          </SVGWrapper>
                          <P2 size="11px">Default</P2>
                        </SelectDefault>
                        <SelectTag
                          onClick={() => dispatch(setIntroVideoId(data?._id))}
                          isSelected={generateValues.introVideoId == data?._id}
                        >
                          <SVGWrapper>
                            <TickIcon />
                          </SVGWrapper>
                        </SelectTag>
                      </CreationVideo>
                    ))}
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
                {isFetching
                  ? [1, 2, 3].map((data, key) => (
                      <ShimmerCard width={"180px"} height={"125px"} key={key} />
                    ))
                  : personaData?.outroVideos?.map((data, key) => (
                      <CreationVideo width={"180px"} height={"125px"} key={key}>
                        <VideoWrapper
                          height={"100px"}
                          width="100%"
                          onLoadedMetadata={(e) => handleLoadedMetadata(e)}
                          controls
                        >
                          <source src={data?.metadata?.url} type="video/mp4" />
                        </VideoWrapper>
                        <FlexRow width="100%" justifycontent="space-between">
                          <P2 color={colors.grayLight} size="13px">
                            {data?.name}
                          </P2>
                        </FlexRow>

                        <SelectDefault
                          isSelected={
                            data?._id == defaultVideo.defaultOutroVideo
                          }
                        >
                          <SVGWrapper>
                            <CheckIcon />
                          </SVGWrapper>
                          <P2 size="11px">Default</P2>
                        </SelectDefault>

                        <SelectTag
                          onClick={() => dispatch(setOutroVideoId(data?._id))}
                          isSelected={generateValues.outroVideoId == data?._id}
                        >
                          <SVGWrapper>
                            <TickIcon />
                          </SVGWrapper>
                        </SelectTag>
                      </CreationVideo>
                    ))}
              </GridTab>
            </FlexColumn>
            <Button
              text="Select To Generate Video Script"
              style={{ width: "100%" }}
              onClick={() => generateScript()}
              disabled={!generateValues.speaker || isGenerating}
              loading={isGenerating}
            />
          </SelectionContainer>
        )}
        {isScript ? (
          <VideoScript
            setGeneratedVideo={setGeneratedVideo}
            setIsScript={setIsScript}
            onChange={handleChange}
            script={messages}
          />
        ) : (
          !generatedVideo && (
            <FlexColumn gap="68px">
              <SVGWrapper>
                <ScriptIcon />
              </SVGWrapper>
              <FlexColumn gap="5px">
                <P1>Please Select Default type</P1>
                <P2>for generating video Script</P2>
              </FlexColumn>
            </FlexColumn>
          )
        )}
        <Title>Select To Generate Video</Title>
      </SelectWrapper>
    </Container>
  );
};
