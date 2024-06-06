import { CheckCircleIcon, MinusCircleIcon, XCircleIcon } from '@heroicons/react/solid';

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
      <div className="flex items-center">
        <button 
          className="w-6 h-6 my-auto mr-6"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? (
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
          ) : (
            <MinusCircleIcon className="w-6 h-6 text-gray-500" />
          )}
        </button>
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>{task.text}</span>
      </div>
      <button onClick={() => onDeleteTask(task.id)} className="text-gray-400 hover:text-white">
        <XCircleIcon className="w-6 h-6" />
      </button>
    </li>
  );
};

export default TaskItem;
