import TimerContainer from "./timerContainer";
import { useEffect, useState } from "react";
import "../../assets/css/styles.css";
import { TasksData, ListData, TimerContainerProps } from "../../Interfaces/interfaces";

export default function TimerList() {
  const [TASKS, setTASKS] = useState<ListData[]>([
    {
      listName: "Tasks",
      tasks: [
        { taskID: 0, taskName: "Do the dishes", numberOfPomodoros: 3, timerType: "pomodoro" },
        { taskID: 1, taskName: "Study Programming", numberOfPomodoros: 2, timerType: "break" },
        { taskID: 2, taskName: "Learn React", numberOfPomodoros: 6, timerType: "long-break" },
      ],
    },
    {
      listName: "To-Do",
      tasks: [
        { taskID: 0, taskName: "Learn typeScript", numberOfPomodoros: 3, timerType: "pomodoro" },
        {
          taskID: 1,
          taskName: "Learn BackEnd with .NET",
          numberOfPomodoros: 2,
          timerType: "break",
        },
        {
          taskID: 2,
          taskName: "Practice for Tech Interview",
          numberOfPomodoros: 6,
          timerType: "long-break",
        },
      ],
    },
  ]);

  const updateOrderOfTasks: (newListData: ListData) => void = (newListData) => {
    //************ Update Order of each of the Tasks in a List ************/
    //newListData: ordered object containing the tasks
    // const newTasks: ListData[] = [
    //   ...TASKS.filter((task) => task.listName !== newListData.listName),
    //   newListData,
    // ];

    const newTasks = [...TASKS];
    newTasks.forEach((task) => {
      if (task.listName === newListData.listName) {
        task.tasks = newListData.tasks;
      }
    });
    setTASKS(newTasks);
  };

  const addTaskList = () => {};
  const title = "Tasks";

  return (
    <>
      {TASKS.map((task) => {
        {
          /* /* Creates a timer container with tasks from the TASKS array */
        }
        return (
          <div key={task.listName} className='px-5'>
            <div className='timer'>
              <h2 className='timer__title'>{task.listName}</h2>
              <TimerContainer
                tasks={task.tasks}
                listName={task.listName}
                updateOrderOfTasks={updateOrderOfTasks}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
