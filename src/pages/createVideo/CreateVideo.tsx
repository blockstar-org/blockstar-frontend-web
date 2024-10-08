import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { BackIcon, CheckIcon, ScriptIcon } from "../../assets/svgs/svg";
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
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import { variables } from "../../utilities/constants";
import {
  Container,
  CreationVideo,
  GridTab,
  SelectDefault,
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

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setScript(e.target.value);
    console.log({ val: e.target.value });
  };

  const fetchPersonaData = async (_id) => {
    try {
      const resp = await getPersona({ _id });
      setPersonaData(resp?.data?.data?.personas[0]);
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
      //   const response = await fetch(
      //     `https://backend-blockstar1-dev.rapidinnovation.tech/api/v1/events/get-video-script/${scriptId}`,
      //     {
      //       method: "GET",
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem(
      //           variables.accessToken
      //         )}`, // Add any required headers here
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );

      //   if (response.ok) {
      // Now open the EventSource connection after authentication
      const eventSource = new EventSource(
        `https://backend-blockstar1-dev.rapidinnovation.tech/api/v1/events/get-video-script/${scriptId}?token=${localStorage.getItem(
          variables.accessToken
        )}`
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
      //   } else {
      //     console.error("Failed to authenticate or fetch initial data");
      //   }
    };
    if (scriptId) startSSE();
  }, [scriptId]);

  //   useEffect(() => {
  //     const token = localStorage.getItem(variables.accessToken); // Replace with the actual token

  //     // Using fetch with custom headers to open the connection
  //     // const connectToSSE = async () => {
  //     //   const response = await fetch(
  //     //     `https://backend-blockstar1-dev.rapidinnovation.tech/api/v1/events/get-video-script/${scriptId}`,
  //     //     {
  //     //       headers: {
  //     //         Authorization: `Bearer ${token}`,
  //     //         Accept: "text/event-stream",
  //     //       },
  //     //     }
  //     //   );

  //     //   if (!response.body) {
  //     //     console.error("Readable stream not supported in this browser");
  //     //     return;
  //     //   }

  //     //   const reader = response.body.getReader();
  //     //   const decoder = new TextDecoder();

  //     //   let buffer = "";

  //     //   const readStream = async () => {
  //     //     const { value, done } = await reader.read();

  //     //     if (done) {
  //     //       console.log("SSE stream closed");
  //     //       return;
  //     //     }

  //     //     // Decode the stream and accumulate data
  //     //     buffer += decoder.decode(value, { stream: true });

  //     //     let parts = buffer.split("\n\n"); // Split based on SSE data frames
  //     //     buffer = parts.pop() || ""; // Keep any incomplete frame in the buffer

  //     //     parts.forEach((part) => {
  //     //       if (part.startsWith("data: ")) {
  //     //         const data = part.slice(6);
  //     //         setMessages((prevMessages) => [...prevMessages, data]);
  //     //       }
  //     //     });

  //     //     readStream(); // Keep reading the stream
  //     //   };

  //     //   readStream();
  //     // };
  //     const connectToSSE = () => {
  //       const xhr = new XMLHttpRequest();

  //       xhr.open(
  //         "GET",
  //         `https://backend-blockstar1-dev.rapidinnovation.tech/api/v1/events/get-video-script/${scriptId}`,
  //         true
  //       );
  //       xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  //       xhr.setRequestHeader("Accept", "text/event-stream");

  //       let buffer = "";

  //       // Process the stream and accumulate data
  //       xhr.onreadystatechange = () => {
  //         if (xhr.readyState >= XMLHttpRequest.LOADING) {
  //           // Log the responseText as it's loading
  //           console.log(`Received data chunk: ${xhr.responseText}`);
  //           const cleanedString = xhr.responseText.replace(/^.*?({)/, '$1')
  //           console.log(
  //             "filter",
  //             cleanedString
  //           );
  //           if(cleanedString){
  //             setMessages(cleanedString)
  //             setIsGenerating(false)
  //             setIsScript(true)
  //           }

  //           // Accumulate the response
  //           buffer += xhr.responseText;
  //           console.log({ buffer });

  //           // Split the buffer by double newlines
  //           const parts = buffer.split("\n\n");
  //           buffer = parts.pop() || ""; // Store any partial frame in buffer

  //           parts.forEach((part) => {
  //             if (part.startsWith("data: ")) {
  //               const dataString = part.slice(6); // Get the data part
  //               console.log("Received event data:", dataString); // Log received message

  //               try {
  //                 const jsonData = JSON.parse(dataString); // Parse the JSON data
  //                 console.log({ jsonData });

  //                 setMessages((prevMessages) => [...prevMessages, jsonData]); // Save to state
  //               } catch (error) {
  //                 console.error("Error parsing JSON:", error);
  //               }
  //             } else {
  //               // Remove unwanted prefixes
  //               const cleanedString = part.replace(/event: .*?data:\s*/, "");

  //               // Extract JSON part
  //               const jsonData = cleanedString.trim(); // Trimming any leading or trailing whitespace

  //               // Parse the JSON
  //               try {
  //                 // const parsedData = JSON.parse(jsonData);
  //                 console.log("Parsed Data:", jsonData); // Log the parsed data

  //                 // Accessing the message
  //                 // const message = parsedData.message;
  //                 // console.log("Message:", message);
  //               } catch (error) {
  //                 console.error("Error parsing JSON:", error);
  //               }
  //             }
  //           });
  //         }
  //       };

  //       xhr.onerror = () => {
  //         console.error("Error occurred during SSE connection");
  //       };

  //       xhr.send();
  //     };

  //     if (scriptId) {
  //       connectToSSE();
  //     }

  //     // Clean up on unmount
  //     return () => {
  //       console.log("Cleaning up");
  //     };
  //   }, [scriptId]);

  console.log({ messages });

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
                  ? [1, 2, 3].map(() => (
                      <ShimmerCard width={"180px"} height={"125px"} />
                    ))
                  : personaData?.introVideos?.map((data) => (
                      <CreationVideo width={"180px"} height={"125px"}>
                        <ImageWrapper
                          src={data?.metadata?.url || images.thumbnail}
                          alt="thumbnail"
                          height={"100px"}
                          width="100%"
                        />
                        <FlexRow width="100%" justifycontent="space-between">
                          <P2 color={colors.grayLight} size="13px">
                            Video Name
                          </P2>
                        </FlexRow>
                        <SelectDefault
                          onClick={() => dispatch(setIntroVideoId(data?._id))}
                          isSelected={generateValues.introVideoId == data?._id}
                        >
                          <SVGWrapper>
                            <CheckIcon />
                          </SVGWrapper>
                          <P2>Set as default</P2>
                        </SelectDefault>
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
                  ? [1, 2, 3].map(() => (
                      <ShimmerCard width={"180px"} height={"125px"} />
                    ))
                  : personaData?.outroVideos?.map((data) => (
                      <CreationVideo width={"180px"} height={"125px"}>
                        <ImageWrapper
                          src={data?.metadata?.url || images.thumbnail}
                          alt="thumbnail"
                          height={"100px"}
                          width="100%"
                        />
                        <FlexRow width="100%" justifycontent="space-between">
                          <P2 color={colors.grayLight} size="13px">
                            Video Name
                          </P2>
                        </FlexRow>
                        <SelectDefault
                          onClick={() => dispatch(setOutroVideoId(data?._id))}
                          isSelected={generateValues.outroVideoId == data?._id}
                        >
                          <SVGWrapper>
                            <CheckIcon />
                          </SVGWrapper>
                          <P2>Set as default</P2>
                        </SelectDefault>
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
      </SelectWrapper>
    </Container>
  );
};
