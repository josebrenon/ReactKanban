import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/footer";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {

  const listaStorage = localStorage.getItem('Tasks')

  const [tasks, setTasks] = useState(listaStorage ? JSON.parse(listaStorage) : []);

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
}, [tasks])

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((exitingTasks) => {
      return exitingTasks.filter((task) => task.id !== id);
    });
  };

  function deletaTudo(){
    
    const resposta = confirm("Quer mesmo deletar todas as tarefas?")
    if (resposta == true) {
      setTasks([])
    }

  }

  return (
    <div className="App">
      <Navbar />
      
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>

      {
        tasks.length > 0 && <button 
        onClick={() => {deletaTudo()}}        
        className="deleteAll">Deletar Todas</button>
      }
      
      <Footer />
    </div>
  );
}
