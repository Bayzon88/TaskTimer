export interface ListData {
  listName: string;
  tasks: TasksData[];
}

export interface TasksData {
  taskID: number;
  taskName: string;
  numberOfPomodoros: number;
  timerType: string;
}

export interface TimerContainerProps {
  tasks: TasksData[];
  listName: string;
  updateOrderOfTasks: Function;
}
