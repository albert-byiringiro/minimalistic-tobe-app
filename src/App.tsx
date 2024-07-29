import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Todo from './components/Todo'

export default function App() {
  
  return (
    <main className="mx-12">
      <h1 className="text-center text-4xl text-gray-400 font-bold my-7">Todos</h1>
      <form className="relative mb-4">
        <input type="text" className="px-4 py-4 shadow-xl rounded-full w-full placeholder-gray-900 border-2 border-gray-300" placeholder='Add a todo' />
        <button className="absolute top-4 right-8">
          <FontAwesomeIcon icon={faPlusCircle} className='text-green-600 text-2xl'/>
        </button>
      </form>
      <Todo/>
    </main>
  )
}