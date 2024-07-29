import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons'


type Tobe = {
    id: string;
    title: string;
    createdAt: Date;
    isCompleted: boolean;
}

interface Props {
    todos: Tobe[], 
    ontoggleComplete: (id: string) => void, 
    onDelete: (id: string) => void, 
}

export default function Todo({todos, ontoggleComplete, onDelete}: Props) {
    
    const doing = todos.map((tada) => (
        <li className="flex space-x-4" key={tada.id}>
        <button className="" onClick={() => ontoggleComplete(tada.id)}>
        <FontAwesomeIcon className={`${tada.isCompleted ? "text-green-500" : "text-gray-200"}`} icon={tada.isCompleted ? faCheckSquare : faSquare} />
        </button>
        <p className={`w-[95%] ${tada.isCompleted ? "line-through": ""}`} >{tada.title}</p>
        <button className="" onClick={() => onDelete(tada.id)}>
            <FontAwesomeIcon icon={faTrash} className='text-red-600 px-2 py-2 rounded-full bg-gray-200'/>
        </button>
    </li>
    ))

    return(
        <div className="">
            {todos.length === 0 && <h1 className="text-gray-400 text-2xl font-semibold text-center">No todos for now...</h1>}
            <ul className="flex flex-col space-y-4 py-4">
                {doing}
            </ul>
        </div>
    )
}