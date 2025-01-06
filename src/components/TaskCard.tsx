import { useState, useEffect } from 'react';
import { Task, User } from '@/types';
import { formatTime } from '@/utils/time';
import { playTaskCompleteSound } from '@/utils/sound';

interface TaskCardProps {
  task: Task;
  currentUser: 'user1' | 'user2';
  users?: User[];
  onUpdate: () => void;
  onDragStart?: (e: React.DragEvent, task: Task) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent, task: Task) => void;
}

export default function TaskCard({ 
  task, 
  currentUser, 
  users = [], 
  onUpdate,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop
}: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority || 0);
  const [elapsedTime, setElapsedTime] = useState(task.timeSpent);
  const [isTransferring, setIsTransferring] = useState(false);

  const isAssignedToCurrentUser = task.assignedTo === currentUser;
  const assignedUserName = users.find(u => u.id === task.assignedTo)?.name || 
    (task.assignedTo === 'user1' ? 'User One' : 'User Two');
  const completedByName = task.completedBy ? 
    users.find(u => u.id === task.completedBy)?.name || 
    (task.completedBy === 'user1' ? 'User One' : 'User Two') : null;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (task.startTime) {
      interval = setInterval(() => {
        const startTime = new Date(task.startTime!).getTime();
        const currentTime = new Date().getTime();
        setElapsedTime((task.timeSpent || 0) + (currentTime - startTime));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [task.startTime, task.timeSpent]);

  const handleAction = async (action: string, updates?: any) => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser, action, updates }),
      });

      if (response.ok) {
        onUpdate();
        if (action === 'update') {
          setIsEditing(false);
        }
      }
    } catch (error) {
      console.error(`Error ${action} task:`, error);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser }),
      });

      if (response.ok) {
        onUpdate();
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTransfer = async (toUserId: 'user1' | 'user2') => {
    try {
      const response = await fetch(`/api/tasks/${task.id}/transfer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          fromUserId: currentUser,
          toUserId
        }),
      });

      if (response.ok) {
        onUpdate();
        setIsTransferring(false);
      }
    } catch (error) {
      console.error('Error transferring task:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      handleAction('update', { 
        title: title.trim(), 
        description: description.trim(),
        priority
      });
    }
  };

  const handleToggleComplete = async () => {
    try {
      const response = await fetch(`/api/tasks/${task.id}/toggle`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser }),
      });

      if (response.ok) {
        onUpdate();
        if (!task.completed) {
          playTaskCompleteSound(task.assignedTo);
        }
      }
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="glass-card p-6 mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field w-full px-3 py-2"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
            className="input-field w-full px-3 py-2"
          >
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="glass-button px-4 py-2 rounded-lg text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="glass-button px-4 py-2 rounded-lg text-sm bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      className={`glass-card p-6 mb-4 ${task.completed ? 'opacity-60' : ''}`}
      draggable={!task.completed}
      onDragStart={(e) => onDragStart?.(e, task)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop?.(e, task)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            {!task.completed && (
              <div className={`w-2 h-2 rounded-full ${
                task.priority >= 2 ? 'bg-red-500' :
                task.priority === 1 ? 'bg-yellow-500' :
                'bg-gray-500'
              }`} title={`Priority: ${
                task.priority >= 2 ? 'High' :
                task.priority === 1 ? 'Medium' :
                'Low'
              }`} />
            )}
            <h3 className="text-base font-medium">{task.title}</h3>
          </div>
          <p className="text-gray-500 mt-1 text-sm">{task.description}</p>
          <div className="text-xs text-gray-400 mt-2">
            Time spent: {formatTime(elapsedTime)}
          </div>
        </div>
        <div className="text-right">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            task.assignedTo === 'user1' 
              ? 'bg-blue-500/10 text-blue-500' 
              : 'bg-purple-500/10 text-purple-500'
          }`}>
            {assignedUserName}
          </span>
        </div>
      </div>
      
      {isAssignedToCurrentUser && (
        <div className="mt-4 flex flex-wrap gap-2">
          {!task.completed ? (
            <>
              {!task.startTime ? (
                <button
                  onClick={() => handleAction('start')}
                  className="glass-button px-4 py-2 rounded-lg text-xs bg-blue-500 text-white"
                >
                  Start Timer
                </button>
              ) : (
                <button
                  onClick={() => handleAction('pause')}
                  className="glass-button px-4 py-2 rounded-lg text-xs bg-yellow-500 text-white"
                >
                  Pause Timer
                </button>
              )}
              <button
                onClick={handleToggleComplete}
                className="glass-button px-4 py-2 rounded-lg text-xs bg-green-500 text-white"
              >
                Mark Complete
              </button>
            </>
          ) : (
            <button
              onClick={() => handleAction('undo')}
              className="glass-button px-4 py-2 rounded-lg text-xs bg-orange-500 text-white"
            >
              Undo Complete
            </button>
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="glass-button px-4 py-2 rounded-lg text-xs"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="glass-button px-4 py-2 rounded-lg text-xs bg-red-500 text-white"
          >
            Delete
          </button>
          {!task.completed && (
            <button
              onClick={() => setIsTransferring(true)}
              className="glass-button px-4 py-2 rounded-lg text-xs bg-purple-500 text-white"
            >
              Transfer
            </button>
          )}
        </div>
      )}
      
      {isTransferring && (
        <div className="mt-4 p-4 glass-card bg-opacity-50">
          <h4 className="text-xs font-medium mb-2">Transfer to:</h4>
          <div className="flex gap-2">
            {users
              .filter(user => user.id !== task.assignedTo)
              .map(user => (
                <button
                  key={user.id}
                  onClick={() => handleTransfer(user.id as 'user1' | 'user2')}
                  className="glass-button px-3 py-1 rounded-lg text-xs"
                >
                  {user.name}
                </button>
              ))}
            <button
              onClick={() => setIsTransferring(false)}
              className="glass-button px-3 py-1 rounded-lg text-xs"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      
      {task.completed && (
        <div className="text-green-500 text-xs mt-4">
          ✓ Completed by {completedByName}
          {task.completedAt && (
            <span className="ml-2 text-gray-400">
              at {new Date(task.completedAt).toLocaleTimeString()}
            </span>
          )}
        </div>
      )}
    </div>
  );
} 