import { CrossIcon } from "../../assets/svgs/svg";
import { FlexRow, SVGWrapper } from "../../styles/sharedStyles";
import { ModalContainer, ModalContent } from "./CustomModal.style";

interface ModalProps {
  children: React.ReactNode;
  onClose?: Function;
  enableBackgroundClick?: boolean;
  nopadding?: boolean | undefined;
  width?: string | undefined;
  right?: string;
  showCloseIcon?: boolean;
  animate?: any;
  isNotCenter?: boolean;
}
const CustomModal = (props: ModalProps) => {
  const {
    children,
    onClose,
    enableBackgroundClick,
    nopadding,
    width,
    right,
    showCloseIcon,
    animate,
    isNotCenter,
  } = props;

  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget && enableBackgroundClick && onClose) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleBackgroundClick} isNotCenter={isNotCenter}>
      <ModalContent
        nopadding={nopadding?.toString()}
        width={width}
        right={right}
        $animate={animate}
      >
        {showCloseIcon && (
          <FlexRow
            justifycontent="flex-end"
            style={{ marginTop: "-30px", marginRight: "-20px" }}
          >
            <SVGWrapper
              onClick={() => onClose()}
              width="22px"
              style={{ cursor: "pointer" }}
            >
              <CrossIcon />
            </SVGWrapper>
          </FlexRow>
        )}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default CustomModal;
