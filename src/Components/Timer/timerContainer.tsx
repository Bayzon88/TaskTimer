import { FC, useState } from "react";
import Timer from "./timer";

interface TimerContainerProps {
  tasks: {
    taskID: number;
    taskName: string;
    numberOfPomodoros: number;
    timerType: string;
  }[];
  setTasks: Function;
}

const TimerContainer: FC<TimerContainerProps> = ({ tasks, setTasks }) => {
  //************* Start Event Handlers for drag and drop items *****************//

  const [dragItem, setDragItem] = useState(0);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number): void => {
    setDragItem(index);

    console.log("comenzo el drag");
  };

  const handleDragEnter = (e: any, index: number): void => {
    console.log(e.target);
    e.stopPropagation();
    e.preventDefault();
    if (e.target.draggable == true) {
      e.preventDefault();

      const newTasks = [...tasks];
      const item = newTasks[dragItem];
      newTasks.splice(dragItem, 1);
      newTasks.splice(index, 0, item);
      setDragItem(index);

      setTasks(newTasks);
    }
  };

  const handleDragLeave = (e: any): void => {
    console.log("leaving");
  };

  const handleDragEnd = (e: any, index: number): void => {
    e.preventDefault();
    if (e.target.draggable == true) {
      e.preventDefault();
      e.stopPropagation();
      const newTasks = [...tasks];
      const item = newTasks[dragItem];
      newTasks.splice(dragItem, 1);
      newTasks.splice(index, 0, item);
      setDragItem(index);

      setTasks(newTasks);
    }
  };

  const handleDrop = (e: any, index: number): void => {
    console.log(e.target);
  };
  //************** End Event Handlers for drag and drop items ******************//

  return (
    <>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={task.taskID}>
              <div
                className={"timer-container"}
                id={task.taskID.toString()}
                draggable
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragStart={(e) => {
                  handleDragStart(e, index);
                }}
                // onDragLeave={(e) => handleDragLeave(e)}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={(e) => handleDragEnd(e, index)}
              >
                <Timer task={task} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TimerContainer;
