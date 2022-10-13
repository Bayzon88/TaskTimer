import { FC } from "react";
interface ActivableButtonsProps {
  buttonType: string;
  handleCountingState: Function;
  isCountingDown: boolean;
}

// export default function ActivableButtons(props: JSX.Element): FC<ActivableButtonsProps> {

// }
const ActivableButtons: FC<ActivableButtonsProps> = (props): JSX.Element => {
  return (
    <span>
      {/* Button will change name from START to STOP depending on the state of isCoutingDown variable */}
      {props.isCountingDown ? (
        <button
          onClick={() => {
            props.handleCountingState();
          }}
        >
          STOP
        </button>
      ) : (
        <button
          onClick={() => {
            props.handleCountingState();
          }}
        >
          START
        </button>
      )}
    </span>
  );
};

export default ActivableButtons;
