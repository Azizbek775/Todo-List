import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
