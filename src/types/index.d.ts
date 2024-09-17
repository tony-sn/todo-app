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
  | {
      type: "cleared";
    }
  | { type: "unknown" | never };

type TaskProps = {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
};

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
};
