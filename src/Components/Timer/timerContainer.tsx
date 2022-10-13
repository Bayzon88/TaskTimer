import { DragEvent, DragEventHandler, FC, useState } from "react";
import Timer from "./timer";
import Sidebuttons from "../Utilities/SideButtons";
import ActivableButtons from "../Utilities/ActivableButtons";
import { isConstructorDeclaration } from "typescript";

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
  const handleDragStart = (index: number): void => {
    setDragItem(index);
    console.log("im dragging item " + index);
  };

  const handleDragEnter = (e: any, id: number): void => {
    const newTasks = [...tasks];
    const item = newTasks[dragItem];
    newTasks.splice(dragItem, 1);
    newTasks.splice(id, 0, item);
    setDragItem(id);
    setTasks(newTasks);
  };

  const handleDragLeave = (e: any): void => {};

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    console.log(e.target);
    e.preventDefault();
  };
  //************** End Event Handlers for drag and drop items ******************//

  return (
    <>
      <ul>
        {tasks &&
          tasks.map((task, index) => {
            return (
              <div
                id={task.taskID.toString()}
                draggable
                onDragStart={(e) => handleDragStart(index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDrop={(e) => handleDrop(e)}
                // onDragOver={(e) => e.preventDefault()}
                key={task.taskID}
              >
                <Timer task={task} />
              </div>
            );
          })}
      </ul>
    </>
  );
};
export default TimerContainer;
