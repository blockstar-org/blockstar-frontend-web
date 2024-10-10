import { useState } from "react";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import { TextInput } from "../../components/InputComponent/TextInput";
import { useUpdateScriptMutation } from "../../integration/redux/apis/scriptApi";
import { notify } from "../../main";
import { FlexColumn, FlexRow, P1, P2 } from "../../styles/sharedStyles";

export const VideoScript = ({
  setGeneratedVideo,
  setIsScript,
  onChange,
  script,
  scriptId,
}) => {
  const [value, setCheckbox] = useState<boolean>(true);
  const [updateScript, { error, isLoading }] = useUpdateScriptMutation();

  const scriptUpdate = async () => {
    try {
      const resp = await updateScript({
        scriptId,
        payload: { script },
      }).unwrap();
      notify(resp?.message);
      setGeneratedVideo(true);
      setIsScript(false);
    } catch (err) {
      console.error({ err });
      notify(err?.data?.message, true);
    }
  };

  return (
    <FlexColumn alignitems="flex-start" justifycontent="flex-start" gap="36px">
      <P1 size="23px">Your Video Script</P1>
      <TextInput
        placeholder={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        onChange={onChange}
        value={script}
        minHeight="350px"
      />
      <FlexRow gap="16px">
        <Checkbox
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />{" "}
        <P2 size="16px">Please check to proceed with script generation</P2>
      </FlexRow>
      <Button
        text="Submit"
        style={{ width: "100%" }}
        disabled={value || isLoading}
        loading={isLoading}
        onClick={() => {
          scriptUpdate();
        }}
      />
    </FlexColumn>
  );
};
