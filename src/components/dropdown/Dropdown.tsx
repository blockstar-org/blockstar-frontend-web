import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DownCaretIcon } from "../../assets/svgs/svg";
import { P2, SVGWrapper } from "../../styles/sharedStyles";
import { colors, fonts } from "../../styles/theme";

interface DropdopwnProps {
  options: any;
  optionText: string;
  setOption: any;
  selectedOption: any;
  noBorder?: boolean;
  noPadding?: boolean;
  noIcon?: boolean;
}

export const Dropdown = ({
  options,
  optionText,
  setOption,
  selectedOption,
  noBorder,
  noIcon,
  noPadding,
}: DropdopwnProps) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!dropdownRef.current?.contains(event.target as Node)) {
      setOpenOptions(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper
      onClick={() => setOpenOptions((prev) => !prev)}
      noPadding={noPadding}
      noBorder={noBorder}
    >
      <P2>{selectedOption?.name || selectedOption}</P2>
      {!noIcon && (
        <SVGWrapper>
          <DownCaretIcon />
        </SVGWrapper>
      )}
      {openOptions && (
        <OptionWrapper>
          <P2>{optionText}</P2>
          {options.map((opt) => (
            <Type
              onClick={() => setOption(opt)}
              isSelected={
                selectedOption?.name == opt?.name || selectedOption == opt
              }
            >
              {opt?.name || opt}
            </Type>
          ))}
        </OptionWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ noPadding?; noBorder? }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ noPadding }) =>
    noPadding ? null : `var(--border-radius, 8px) 16px`};
  align-items: center;
  gap: var(--border-radius, 8px);
  flex-shrink: 0;
  border-radius: var(--border-radius, 8px);
  border: ${({ noBorder }) =>
    noBorder ? null : `var(--Stroke_br_normal, 1px) solid ${colors.grayLight}`};
  background: ${colors.darkpurple};
  cursor: pointer;
`;

const OptionWrapper = styled.div`
  width: max-content;
  position: absolute;
  top: 45px;
  left: 0;
  display: flex;
  padding: 17px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: var(--border-radius, 8px);
  border: var(--Stroke_br_lt-2, 0.5px) solid ${colors.gray};
  background: ${colors.darkpurple};

  /* backshadow */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  max-height: 130px;
  overflow: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
`;

export const Type = styled.div<{ isSelected? }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: var(--border-radius, 8px);
  border: ${({ isSelected }) => isSelected && `1px solid ${colors.grayLight}`};
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  /* Body 1 medium */
  font-family: ${fonts.SansRegular};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 15.6px */
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    border: var(--Stroke_br_normal, 1px) solid ${colors.grayLight};
  }
`;
