import TimerContainer from "./timerContainer";
import { useEffect, useState } from "react";
import "../../assets/css/styles.css";

export default function TimerList() {
  type TasksType = {
    taskID: number;
    taskName: string;
    numberOfPomodoros: number;
    timerType: string;
  };
  const [TASKS, setTASKS] = useState([
    { taskID: 0, taskName: "Do the dishes", numberOfPomodoros: 3, timerType: "pomodoro" },
    { taskID: 1, taskName: "Study Programming", numberOfPomodoros: 2, timerType: "break" },
    { taskID: 2, taskName: "Learn React", numberOfPomodoros: 6, timerType: "long-break" },
  ]);

  // useEffect(() => {
  //   console.log("HOLIIII");
  // }, [TASKS]);

  return (
    <div className='timer'>
      {/* Creates a timer container with tasks from the TASKS array */}
      <TimerContainer tasks={TASKS} setTasks={setTASKS} />
    </div>
  );
}
