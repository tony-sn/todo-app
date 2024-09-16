import { Task } from "components/Task";

export const TaskList = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <ul className="w-full">
      {tasks.map((task: Task) => (
        <li key={task.id} className="mb-4">
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
