const TodoItem = ({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-start bg-gray-100 rounded px-4 py-2 shadow-sm flex-col sm:flex-row sm:items-center">
      <div className="flex flex-col">
        <span className="text-lg">{task.text}</span>
        <span className="text-xs text-gray-500">Added at: {task.createdAt}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 mt-2 sm:mt-0"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;