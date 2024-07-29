import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo() {
    return(
        <div className="">
            <h1 className="text-gray-400 text-2xl font-semibold text-center">No todos for now...</h1>
            <ul className="flex flex-col space-y-4 py-4">
                <li className="flex space-x-4">
                    <button className="">
                        <FontAwesomeIcon icon={faSquare} className='text-gray-300'/>
                    </button>
                    <p className="w-[95%]">I need the prayers of those I love.</p>
                    <button className="">
                        <FontAwesomeIcon icon={faTrash} className='text-red-600 px-2 py-2 rounded-full bg-gray-200'/>
                    </button>
                </li>
            </ul>
        </div>
    )
}