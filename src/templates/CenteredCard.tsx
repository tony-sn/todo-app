import { useState, useReducer } from "react";

const tasksReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return state.map((t) => (t.id === action.task.id ? action.task : t));
    }

    case "deleted": {
      return state.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialTasks = [
  {
    id: 0,
    text: "House work",
    done: true,
  },
  {
    id: 1,
    text: "Visit the gym",
    done: false,
  },
  {
    id: 2,
    text: "Drink matcha",
    done: false,
  },
];

let nextId = 3;

export default function CenteredCard() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [text, setText] = useState("");

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text,
    });
  }

  // function handleChangeTask(task: Task) {
  //   dispatch({
  //     type: "changed",
  //     task: task,
  //   });
  // }
  //
  // function handleDeleteTask(taskId: number) {
  //   dispatch({
  //     type: "deleted",
  //     id: taskId,
  //   });
  // }

  const onAddTask = handleAddTask;

  console.log({ tasks, onAddTask });

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            New Todo App
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Use this to add new todo items and manage your tasks with ease.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setText("");
              onAddTask(text);
            }}
            className="mx-auto mt-10 flex max-w-md gap-x-4"
          >
            <label htmlFor="task" className="sr-only">
              Add a new task
            </label>
            <input
              id="task"
              name="task"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              placeholder="Add a new task"
              autoComplete="task"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="min-w-[10rem] flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Add Task
            </button>
          </form>

          <section
            aria-label="card container"
            className="mx-auto mt-10 flex max-w-md gap-x-4"
          >
            <div aria-label="task 1" className="mx-auto max-w-md gap-x-4 flex">
              <label htmlFor="Edit task" className="sr-only">
                Task 1
              </label>
              <input
                id="edit-task"
                name="edit-task"
                type="text"
                readOnly
                value="Task 1"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="min-w-[4.5rem] flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Edit
              </button>
              <button
                type="button"
                className="min-w-[4.5rem] flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Delete
              </button>
            </div>
          </section>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
