import { Task, User } from '@/types';

interface ProgressBarProps {
  tasks: Task[];
  users?: User[];
}

export default function ProgressBar({ tasks, users = [] }: ProgressBarProps) {
  const user1Tasks = tasks.filter(task => task.assignedTo === 'user1');
  const user2Tasks = tasks.filter(task => task.assignedTo === 'user2');
  
  const user1Completed = user1Tasks.filter(task => task.completed).length;
  const user2Completed = user2Tasks.filter(task => task.completed).length;
  
  const user1Progress = user1Tasks.length > 0 ? (user1Completed / user1Tasks.length) * 100 : 0;
  const user2Progress = user2Tasks.length > 0 ? (user2Completed / user2Tasks.length) * 100 : 0;

  const user1Name = users.find(u => u.id === 'user1')?.name || 'User One';
  const user2Name = users.find(u => u.id === 'user2')?.name || 'User Two';

  return (
    <div className="glass-card p-8 mb-8">
      <h2 className="text-xl font-medium mb-6">Progress Tracker</h2>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-blue-500">{user1Name}</span>
            <span className="text-sm text-gray-500">{user1Completed}/{user1Tasks.length} ({Math.round(user1Progress)}%)</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-value bg-blue-500"
              style={{ width: `${user1Progress}%` }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-purple-500">{user2Name}</span>
            <span className="text-sm text-gray-500">{user2Completed}/{user2Tasks.length} ({Math.round(user2Progress)}%)</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-value bg-purple-500"
              style={{ width: `${user2Progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 