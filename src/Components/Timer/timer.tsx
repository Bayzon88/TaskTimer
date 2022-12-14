//how to create a timer using useeffect?
import { useEffect, useState } from "react";
import SideButtons from "../Utilities/SideButtons";
import ActivableButtons from "../Utilities/ActivableButtons";
import { doesNotThrow } from "assert";
type TimerProps = {
  task: {
    taskID: number;
    taskName: string;
    numberOfPomodoros: number;
    timerType: string;
  };
};

export default function Timer(props: TimerProps) {
  const [timer, setTimer] = useState(0);
  const [timerType, setTimerType] = useState(props.task.timerType);
  const [isCountingDown, setIsCountingDown] = useState(false);

  const handleCountingState = () => {
    if (isCountingDown) setIsCountingDown(false);
    if (!isCountingDown) setIsCountingDown(true);
  };
  const selectTimerType: Function = (e: any): void => {
    setIsCountingDown(false);
    setTimerType(e.target.textContent.toLowerCase());
  };

  useEffect(() => {
    console.log("Activated useEffect :" + timerType);

    // Creates a Timer with specific time based on the stage name
    switch (timerType) {
      case "pomodoro": {
        setTimer(1 * 5);
        break;
      }
      case "break": {
        setTimer(5 * 60);
        break;
      }
      case "long-break": {
        setTimer(15 * 60);
        break;
      }
    }
  }, [timerType]);

  useEffect(() => {
    // Check if the timer is counting doesNotThrow, when it reaches 0 handleCountingState will stop the timer
    if (isCountingDown) {
      const countDown = setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            handleCountingState();
            return (prev = 0);
          }
        });
      }, 1000);

      return () => clearInterval(countDown);
    }
  }, [timer, isCountingDown]);

  const minutes: number = Math.floor(timer / 60);
  const seconds: number = Math.floor(timer % 60);

  return (
    <>
      <div aria-hidden draggable={false} className='timer__container'>
        <SideButtons selectTimerType={selectTimerType} />
        <span className='timer__container--task'>
          <h2> {props.task.taskName}</h2>

          <p>
            {minutes > 9 ? minutes : `0` + minutes}:{seconds > 9 ? seconds : `0` + seconds}
          </p>
        </span>

        <span className='timer__container--options'>
          <ActivableButtons
            buttonType='start-stop'
            handleCountingState={handleCountingState}
            isCountingDown={isCountingDown}
          />
        </span>
      </div>
    </>
  );
}
