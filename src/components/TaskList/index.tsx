import { Task } from "components/Task";

export const TaskList = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <Task
            key={task.id}
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};
