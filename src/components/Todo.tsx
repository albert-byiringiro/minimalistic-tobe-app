import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


type Tobe = {
    id: string;
    title: string;
    createdAt: Date;
    isCompleted: boolean;
}

export default function Todo({todos}: {todos: Tobe[]}) {
    const doing = todos.map((tada) => (
        <li className="flex space-x-4" id={tada.id}>
        <button className="">
            <FontAwesomeIcon icon={faSquare} className='text-gray-300'/>
        </button>
        <p className="w-[95%]">{tada.title}</p>
        <button className="">
            <FontAwesomeIcon icon={faTrash} className='text-red-600 px-2 py-2 rounded-full bg-gray-200'/>
        </button>
    </li>
    ))

    console.log(doing)

    return(
        <div className="">
            {todos.length === 0 && <h1 className="text-gray-400 text-2xl font-semibold text-center">No todos for now...</h1>}
            <ul className="flex flex-col space-y-4 py-4">
                {doing}
            </ul>
        </div>
    )
}