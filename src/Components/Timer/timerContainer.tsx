import { useState } from "react";
import Timer from "./timer";
type TimerContainerProps = {
  key: number;
};

export default function TimerContainer(props: TimerContainerProps) {
  const [pomodoroStage, setPomodoroStage] = useState("pomodoro");
  const [isCountingDown, setIsCountingDown] = useState(false);

  const selectStage = (e: any) => {
    console.log(e.target.textContent);
    setPomodoroStage(e.target.textContent.toLowerCase());
    setIsCountingDown(false);
  };

  const handleCountingState = () => {
    if (isCountingDown) setIsCountingDown(false);
    if (!isCountingDown) setIsCountingDown(true);
  };

  return (
    <div className='App'>
      <button onClick={selectStage}>Pomodoro</button>
      <button onClick={selectStage}>Break</button>
      <button onClick={selectStage}>Long-Break</button>
      <h2>This is {pomodoroStage}</h2>
      <Timer timerType={pomodoroStage} countingDown={isCountingDown} cb={handleCountingState} />
    </div>
  );
}
