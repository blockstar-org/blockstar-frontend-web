import { useEffect } from "react";
import { images } from "../../assets/images";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import { useAppSelector } from "../../integration/redux/hooks";
import { RootState } from "../../integration/redux/store";
import {
  FlexColumn,
  FlexRow,
  ImageWrapper,
  P1,
  P2,
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import { variables } from "../../utilities/constants";
import { SelectionContainer } from "./createvideo.style";

export const GeneratedVideo = (script) => {
  const generateValues = useAppSelector((state: RootState) => state.generate);
  


  return (
    <>
      <SelectionContainer>
        <P1>Video Script</P1>
        <P2>{script}</P2>
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
