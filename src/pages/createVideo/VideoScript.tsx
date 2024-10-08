import Button from "../../components/button/Button";
import { TextInput } from "../../components/InputComponent/TextInput";
import { FlexColumn, FlexRow, P1, P2 } from "../../styles/sharedStyles";

export const VideoScript = ({
  setGeneratedVideo,
  setIsScript,
  onChange,
  script,
}) => {
  return (
    <FlexColumn alignitems="flex-start" justifycontent="flex-start" gap="36px">
      <P1 size="23px">Your Video Script</P1>
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
