import React, { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Vazifa qo‘shish
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text,
      createdAt: new Date().toLocaleString(), // vaqtni qo‘shish
    };
    setTasks([...tasks, newTask]);
  };

  // Vazifani o‘chirish
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <Header />
        <AddTask onAdd={addTask} />
        <TodoList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;