import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState();
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-2xl font-semibold">Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="p-2 border  mb-5 outline-none"

      />
      <p className="bg-slate-300 mb-5 p-2">
        {task}
      </p>
    </div>

  );
};

export default Todo;
