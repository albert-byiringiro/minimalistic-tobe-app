import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Todo from './components/Todo'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { nanoid } from 'nanoid';

export default function App(): JSX.Element {

  // types

  type Tobe = {
    id: string;
    title: string;
    createdAt: Date;
    isCompleted: boolean;
    isEditing: boolean
  }
  
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<Tobe[]>(()=> {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });
  
  const [editingValue, setEditingValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  };

  
  useEffect(()=>{
    // save todos to local storage whenever it changes
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(todoInput.trim() === "") return;

    const newTodo: Tobe = {
      id: nanoid(),
      title: todoInput,
      createdAt: new Date(),
      isCompleted: false,
      isEditing: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);

    setTodoInput('')

    
  }

  const handleToggleComplete = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(doing => doing.id === id ? {...doing, isCompleted: !doing.isCompleted} : doing)
    })
  }

  const handleDelete = (id:string) => {
    setTodos(prevTodos => prevTodos.filter(doing => doing.id !== id))
  }

  // update todo
  const handleUpdate = (id: string, newValue: string) => {
    setTodos((prevTodos) => prevTodos.map((doing) => doing.id === id ? {
      ...doing, title: newValue, isEditing: false
    }: doing))
  }

  const onToggleEditMode = (id: string, currentTitle: string) => {
    setTodos(prevTodos => prevTodos.map(doing => doing.id === id ? {...doing, isEditing: !doing.isEditing } : doing));
    setEditingValue(currentTitle);
  }

  return (
    <main className="mx-12">
      <h1 className="text-center text-4xl text-gray-400 font-bold my-7">Todos</h1>
      <form className="relative mb-4" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className="px-4 py-4 shadow-xl rounded-full w-full placeholder-gray-900 border-2 border-gray-300" placeholder='Add a todo' id='todo-input' value={todoInput} onChange={(e) => handleInput(e)} />
        <button className="absolute top-4 right-8">
          <FontAwesomeIcon icon={faPlusCircle} className='text-green-600 text-2xl'/>
        </button>
      </form>
      <Todo 
        todos={todos} 
        ontoggleComplete={handleToggleComplete} 
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onToggleEditMode={onToggleEditMode}
        handleEditInput={handleEditInput}
        editingValue={editingValue}
      />
    </main>
  )
}