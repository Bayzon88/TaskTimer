//how to create a timer using useeffect?
import { useEffect, useState } from "react";
import { createBrotliCompress } from "zlib";
type TimerProps = {
  timerType: string;
  countingDown: boolean;
  cb: Function;
};

export default function Timer(props: TimerProps) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    switch (props.timerType) {
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
  }, [props.timerType]);

  function upTimer() {
    setTimer((prev) => prev + 60);
  }
  function downTimer() {
    if (timer <= 0) return;
    setTimer((prev) => prev - 60);
  }

  useEffect(() => {
    if (props.countingDown) {
      console.log(timer);
      const countDown = setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            props.cb();
            return (prev = 0);
          }
        });
      }, 1000);
      // clearInterval(countDown);

      return () => clearInterval(countDown);
    }
  }, [timer, props.countingDown]);

  const minutes: number = Math.floor(timer / 60);
  const seconds: number = Math.floor(timer % 60);

  return (
    <>
      <div>
        <p>{props.countingDown}</p>
        <p>
          {minutes > 9 ? minutes : `0` + minutes}:{seconds > 9 ? seconds : `0` + seconds}
        </p>
      </div>
      {props.countingDown ? (
        <button
          onClick={() => {
            props.cb();
          }}
        >
          STOP
        </button>
      ) : (
        <button
          onClick={() => {
            props.cb();
          }}
        >
          Start
        </button>
      )}
    </>
  );
}
