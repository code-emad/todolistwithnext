"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <label
        className="border border-slate-300 text-slate-300 px-1 py-0.5 m-1 text-xs rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        id={id}
        onClick={handleDelete}
      >
        Delete
      </label>
    </li>
  );
}
