import { useState } from "react";

import {
  TrashIcon,
  PencilSquareIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

import { Tooltip } from "components/Tooltip";

export const Task = ({ task, onChange, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <input
        aria-label="editable-task"
        className="relative pl-8 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        value={task.text}
        onChange={(e) => {
          onChange({
            ...task,
            text: e.target.value,
          });
        }}
      />
    );
  } else {
    taskContent = (
      <input
        name="task"
        type="text"
        readOnly
        value={task.text}
        className="relative pl-8 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
      />
    );
  }
  return (
    <div className="relative flex items-start max-w-md gap-x-4">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
        className="absolute bottom-3 z-10 cursor-pointer left-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:text-indigo-600"
      />
      {taskContent}
      <div className="flex gap-x-2">
        {isEditing ? (
          <button
            className="group inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setIsEditing(false)}
          >
            <Tooltip label="Save" position="left" />
            <CheckIcon className="h-5 w-5" />
          </button>
        ) : (
          <button
            className="group inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setIsEditing(true)}
          >
            <Tooltip label="Edit" position="left" />
            <PencilSquareIcon className="h-5 w-5" />
          </button>
        )}
        <button
          className="group inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => onDelete(task.id)}
        >
          <Tooltip label="Delete" position="right" />
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
