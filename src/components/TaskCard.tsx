import { Task } from '@/types';

interface TaskCardProps {
  task: Task;
  currentUser: 'user1' | 'user2';
  onComplete: (taskId: string) => void;
}

export default function TaskCard({ task, currentUser, onComplete }: TaskCardProps) {
  const isAssignedToCurrentUser = task.assignedTo === currentUser;
  
  return (
    <div className={`p-6 rounded-lg shadow-md mb-4 ${
      task.completed 
        ? 'bg-green-50 border border-green-200' 
        : 'bg-white border border-gray-200'
    }`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </div>
        <div className="text-right">
          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
            task.assignedTo === 'user1' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
          }`}>
            {task.assignedTo === 'user1' ? 'User One' : 'User Two'}
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        {task.completed ? (
          <div className="text-green-600 text-sm">
            ✓ Completed by {task.completedBy === 'user1' ? 'User One' : 'User Two'}
            {task.completedAt && (
              <span className="ml-2">
                at {new Date(task.completedAt).toLocaleTimeString()}
              </span>
            )}
          </div>
        ) : (
          isAssignedToCurrentUser && (
            <button
              onClick={() => onComplete(task.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Mark as Complete
            </button>
          )
        )}
      </div>
    </div>
  );
} 