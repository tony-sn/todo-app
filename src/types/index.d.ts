type Task = {
  id: number;
  text: string;
  done?: boolean;
};

type Action =
  | {
      type: "added";
      id: number;
      text: string;
    }
  | {
      type: "changed";
      task: Task;
    }
  | {
      type: "deleted";
      id: number;
    }
  | { type: "unknown" | never };

type TaskProps = {
  task: Task;
  onChange: (task: Task) => Task;
  onDelete: (id: number) => void;
};

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => Task;
  onDeleteTask: (id: number) => void;
};
