import { images } from "../../assets/images";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import {
  FlexColumn,
  FlexRow,
  ImageWrapper,
  P1,
  P2,
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import { SelectionContainer, SelectWrapper } from "./createvideo.style";

export const GeneratedVideo = () => {
  return (
    <>
      <SelectionContainer>
        <P1>Video Script</P1>
        <P2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P2>
      </SelectionContainer>
      <FlexColumn
        justifycontent="flex-start"
        alignitems="flex-start"
        gap="16px"
      >
        <ImageWrapper
          src={images.generatedVideo}
          alt="generated"
          style={{ borderRadius: "20px" }}
        />
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
      </FlexColumn>
    </>
  );
};
