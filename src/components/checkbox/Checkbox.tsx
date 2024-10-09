import styled from "styled-components";
import { TickIcon } from "../../assets/svgs/svg";
import { SVGWrapper } from "../../styles/sharedStyles";

const Input = styled.input<any>`
  height: 0;
  width: 0;
  opacity: 0;
`;

const Label = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-right: 16px;
`;

const Indicator = styled.div<{ disabled?: boolean }>`
  width: 1.2em;
  height: 1.2em;
  background: var(--Secondary, #3e3eaf);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Input}:not(:disabled):checked + & {
    border-radius: 4px;
    border: 1px solid var(--Gray-1, #475467);
    background: #2f304e;

    /* Shadow/Small */
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.05),
      0px 1px 3px 0px rgba(0, 0, 0, 0.05);
    svg {
      display: none;
    }
  }

  ${Label}:hover & {
    border-radius: 4px;
    background: var(--Secondary, #3e3eaf);

    /* Shadow/Small */
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.05),
      0px 1px 3px 0px rgba(0, 0, 0, 0.05);
  }

  ${Input}:checked + & svg {
    display: block;
    svg {
      display: block;
      opacity: 1;
    }
  }
`;

interface CheckboxProps {
  value: boolean;
  checked: boolean;
  onChange: ({ target }: { target: any }) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
}

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  disabled,
}: CheckboxProps) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator disabled={disabled}>
        <SVGWrapper height="100%">
          <TickIcon />
        </SVGWrapper>
      </Indicator>
    </Label>
  );
}
