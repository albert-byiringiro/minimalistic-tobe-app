import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faTrash, faCheckSquare, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent } from 'react';


type Tobe = {
    id: string;
    title: string;
    createdAt: Date;
    isCompleted: boolean;
    isEditing: boolean
}

interface Props {
    todos: Tobe[], 
    ontoggleComplete: (id: string) => void, 
    onDelete: (id: string) => void, 
    onEdit: (id: string, newValue: string) => void, 
    onToggleEditMode: (id: string, currentTitle: string) => void, 
    handleEditInput: (e: ChangeEvent<HTMLInputElement>) => void, 
    editingValue: string
}

export default function Todo({todos, ontoggleComplete, onDelete, onEdit, onToggleEditMode, editingValue, handleEditInput}: Props) {
    
    const doing = todos.map((be) => (
        <li className="flex space-x-4" key={be.id}>
        <button className="" onClick={() => ontoggleComplete(be.id)}>
        <FontAwesomeIcon className={`${be.isCompleted ? "text-green-500" : "text-gray-200"}`} icon={be.isCompleted ? faCheckSquare : faSquare} />
        </button>
        {be.isEditing ? (
            <div className="flex w-full items-center">
              <input
                type="text"
                value={editingValue}
                onChange={handleEditInput}
                className="flex-grow mx-4 px-2 py-1 border-b-2 border-gray-300"
              />
              <button className="mx-4 px-2 py-1 border-b-2 border-gray-300" onClick={() => onEdit(be.id, editingValue)}>
                <FontAwesomeIcon icon={faSave} className='text-blue-600 px-2 py-2 rounded-full bg-gray-200'/>
              </button>
            </div>
          ) : (
            <span
              className={`mx-4 w-[85%] ${be.isCompleted ? 'line-through text-gray-500' : ''}`}
              onClick={() => onToggleEditMode(be.id, be.title)}
            >
              {be.title} )
            </span>
          )}
        <button className="" onClick={() => onToggleEditMode(be.id, be.title)}>
            <FontAwesomeIcon icon={faEdit} className='text-blue-600 px-2 py-2 rounded-full bg-gray-200'/>
        </button>
        <button className="" onClick={() => onDelete(be.id)}>
            <FontAwesomeIcon icon={faTrash} className='text-red-600 px-2 py-2 rounded-full bg-gray-200'/>
        </button>
    </li>
    ));

    return(
        <div className="">
            {todos.length === 0 && <h1 className="text-gray-400 text-2xl font-semibold text-center">No todos for now...</h1>}
            <ul className="flex flex-col space-y-4 py-4">
                {doing}
            </ul>
        </div>
    )
}