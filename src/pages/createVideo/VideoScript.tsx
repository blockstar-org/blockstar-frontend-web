import { useEffect } from "react";
import Button from "../../components/button/Button";
import { TextInput } from "../../components/InputComponent/TextInput";
import { useGenerateVideoMutation } from "../../integration/redux/apis/generateApi";
import { useAppSelector } from "../../integration/redux/hooks";
import { RootState } from "../../integration/redux/store";
import { FlexColumn, FlexRow, P1, P2 } from "../../styles/sharedStyles";

export const VideoScript = ({
  setGeneratedVideo,
  setIsScript,
  onChange,
  script,
}) => {
  const generateValues = useAppSelector((state: RootState) => state.generate);

  const scriptGenerate = (scripttext) => {
    // Trim everything before the first '{'
    // const cleanedString = script.replace(/^.*?({)/, "$1");

    // // Extract JSON part and trim
    // const jsonData = cleanedString.trim();

    // Parse the JSON
    try {
      const parsedData = JSON.parse(scripttext);
      console.log("Parsed Data:", parsedData); // Log the parsed data

      // Accessing the message
      const message = parsedData.message;
      console.log("Message:", message);

      // Accessing the script
      const script = parsedData.scriptData.script;
      console.log("Script:", script);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

//   useEffect(() => {
//     if(script)
//     scriptGenerate(script);
//   }, [script]);

  return (
    <FlexColumn alignitems="flex-start" justifycontent="flex-start" gap="36px">
      <P1 size="39px">Your Video Script</P1>
      <TextInput
        placeholder={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        onChange={onChange}
        value={script.scriptData.script}
      />
      <FlexRow gap="16px">
        <input type={"checkbox"} />
        <P2 size="16px">Please check to proceed with script generation</P2>
      </FlexRow>
      <Button
        text="Submit"
        style={{ width: "100%" }}
        onClick={() => {
          setGeneratedVideo(true);
          setIsScript(false);
        }}
      />
    </FlexColumn>
  );
};
